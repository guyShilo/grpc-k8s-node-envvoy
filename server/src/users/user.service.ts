import { status } from '@grpc/grpc-js'
import { ProtoCatCall, CallType } from "protocat";
import { ServiceImplementationExtended } from "protocat/dist/lib/server/call";
import { UserModel } from "./user.entity";
import { IUserSvcService } from "./proto/user/user_grpc_pb";
import { RegisterRequest, UserResponse, LoginRequest, VerifyRequest, VerifyResponse, GetUserRequest, GetUsersResponse } from "./proto/user/user_pb";
import * as timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'

const timestamp = new timestamp_pb.Timestamp();

const UserServiceImplementations: ServiceImplementationExtended<IUserSvcService, unknown> = {
    register: async (call: ProtoCatCall<unknown, RegisterRequest, UserResponse, CallType.Unary>) => {
        const token = 'ThisISToken';
        console.log(call.request.toObject())
        let user = {
            name: call.request.getName(),
            email: call.request.getEmail(),
            password: call.request.getPassword(),
            permissionsList: call.request.getPermissionsList(),
            tokensList: []
        };
        const getCreatedUser = await UserModel.create(user);
        call.response
            .setName(getCreatedUser.name)
            .setEmail(getCreatedUser.email)
            .setId(getCreatedUser._id.toString())
            .setPermissionsList(getCreatedUser.permissionsList)
            .setTokensList(getCreatedUser.tokensList);
    },
    login: async (call: ProtoCatCall<unknown, LoginRequest, UserResponse, CallType.Unary>) => {
        const { comparePassword } = UserModel.schema.methods;
        const getUser = await UserModel.findOne({ email: call.request.getEmail() });
        await comparePassword(call.request.getPassword(), getUser.password, async (err: any, isMatch: boolean) => {
            if (err) {
                console.log(err);
                throw err;
            }
            if (!isMatch) {
                throw { code: status.PERMISSION_DENIED, message: 'Passwords do not match.' }
            } else {
                call.response.setName(getUser.name).setEmail(getUser.email).setId(getUser._id.toString());
            }
        });
    },
    verify: async (call) => {

    },
    getUser: async (call) => {
        const getUser = await UserModel.findById({ _id: call.request.getUserId() });
        const { name, email, permissionsList, tokensList, _id } = getUser;
        call.response.setName(name)
            .setEmail(email)
            .setId(_id.toString())
            .setPermissionsList(permissionsList)
            .setTokensList(tokensList);
    },
    getAllUsers: async (call) => {
        const users = await UserModel.find();
        for (let index = 0; index < users.length; index++) {
            const user = new UserResponse();
            const { name, email, permissionsList, tokensList, _id } = users[index];
            user.setName(name)
                .setEmail(email)
                .setId(_id.toString())
                .setPermissionsList(permissionsList)
                .setTokensList(tokensList);
            const employee = new GetUsersResponse()
            employee.setUser(user)
            call.write(employee)
        }
        call.end();
    }
}

export default UserServiceImplementations;
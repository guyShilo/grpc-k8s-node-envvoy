// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as user_pb from "./user_pb";

interface IUserSvcService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    register: IUserSvcService_Iregister;
    login: IUserSvcService_Ilogin;
    verify: IUserSvcService_Iverify;
    getUser: IUserSvcService_IgetUser;
    getAllUsers: IUserSvcService_IgetAllUsers;
}

interface IUserSvcService_Iregister extends grpc.MethodDefinition<user_pb.RegisterRequest, user_pb.UserResponse> {
    path: "/user.UserSvc/register";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.RegisterRequest>;
    requestDeserialize: grpc.deserialize<user_pb.RegisterRequest>;
    responseSerialize: grpc.serialize<user_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.UserResponse>;
}
interface IUserSvcService_Ilogin extends grpc.MethodDefinition<user_pb.LoginRequest, user_pb.UserResponse> {
    path: "/user.UserSvc/login";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.LoginRequest>;
    requestDeserialize: grpc.deserialize<user_pb.LoginRequest>;
    responseSerialize: grpc.serialize<user_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.UserResponse>;
}
interface IUserSvcService_Iverify extends grpc.MethodDefinition<user_pb.VerifyRequest, user_pb.VerifyResponse> {
    path: "/user.UserSvc/verify";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.VerifyRequest>;
    requestDeserialize: grpc.deserialize<user_pb.VerifyRequest>;
    responseSerialize: grpc.serialize<user_pb.VerifyResponse>;
    responseDeserialize: grpc.deserialize<user_pb.VerifyResponse>;
}
interface IUserSvcService_IgetUser extends grpc.MethodDefinition<user_pb.GetUserRequest, user_pb.UserResponse> {
    path: "/user.UserSvc/getUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<user_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.UserResponse>;
}
interface IUserSvcService_IgetAllUsers extends grpc.MethodDefinition<user_pb.Empty, user_pb.GetUsersResponse> {
    path: "/user.UserSvc/getAllUsers";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<user_pb.Empty>;
    requestDeserialize: grpc.deserialize<user_pb.Empty>;
    responseSerialize: grpc.serialize<user_pb.GetUsersResponse>;
    responseDeserialize: grpc.deserialize<user_pb.GetUsersResponse>;
}

export const UserSvcService: IUserSvcService;

export interface IUserSvcServer extends grpc.UntypedServiceImplementation {
    register: grpc.handleUnaryCall<user_pb.RegisterRequest, user_pb.UserResponse>;
    login: grpc.handleUnaryCall<user_pb.LoginRequest, user_pb.UserResponse>;
    verify: grpc.handleUnaryCall<user_pb.VerifyRequest, user_pb.VerifyResponse>;
    getUser: grpc.handleUnaryCall<user_pb.GetUserRequest, user_pb.UserResponse>;
    getAllUsers: grpc.handleServerStreamingCall<user_pb.Empty, user_pb.GetUsersResponse>;
}

export interface IUserSvcClient {
    register(request: user_pb.RegisterRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    register(request: user_pb.RegisterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    register(request: user_pb.RegisterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    login(request: user_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    login(request: user_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    login(request: user_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    verify(request: user_pb.VerifyRequest, callback: (error: grpc.ServiceError | null, response: user_pb.VerifyResponse) => void): grpc.ClientUnaryCall;
    verify(request: user_pb.VerifyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.VerifyResponse) => void): grpc.ClientUnaryCall;
    verify(request: user_pb.VerifyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.VerifyResponse) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getAllUsers(request: user_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<user_pb.GetUsersResponse>;
    getAllUsers(request: user_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<user_pb.GetUsersResponse>;
}

export class UserSvcClient extends grpc.Client implements IUserSvcClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public register(request: user_pb.RegisterRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public register(request: user_pb.RegisterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public register(request: user_pb.RegisterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public login(request: user_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public login(request: user_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public login(request: user_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public verify(request: user_pb.VerifyRequest, callback: (error: grpc.ServiceError | null, response: user_pb.VerifyResponse) => void): grpc.ClientUnaryCall;
    public verify(request: user_pb.VerifyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.VerifyResponse) => void): grpc.ClientUnaryCall;
    public verify(request: user_pb.VerifyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.VerifyResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getAllUsers(request: user_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<user_pb.GetUsersResponse>;
    public getAllUsers(request: user_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<user_pb.GetUsersResponse>;
}

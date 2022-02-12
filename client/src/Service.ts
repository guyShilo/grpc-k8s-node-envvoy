import { UserSvcClient } from "./proto/UserServiceClientPb";
import { RegisterRequest } from "./proto/user_pb";

var client = new UserSvcClient('http://localhost:8080', null, null);

export const callGrpcService = (email: string, name: string, password: string) => {
    const request = new RegisterRequest();
    const { setEmail, setName, setPassword } = request;

    setEmail(email);
    setName(name);
    setPassword(password);


    client.register(request, {}, (err, response) => {
        console.log(email, name, password)
        console.log(request.toObject())
        if (response == null) {
            console.log(err);
        } else {
            console.log(response.toObject());
        }
    })
}
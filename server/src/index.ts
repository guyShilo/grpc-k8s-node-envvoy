import { onError, ProtoCat } from 'protocat'

import { connectDB } from './db';
import { UserSvcService } from './proto/user/user_grpc_pb';
import UserServiceImplementations from './users/user.service';

const app = new ProtoCat()

app.use(
    onError((e, call) => {
        console.log(e)
        // Set metadata
        // @ts-expect-error
        call.initialMetadata.set('error-code', e.code)
        // @ts-expect-error
        call.trailingMetadata.set('error-code', e.code)
        // Consume the error
        throw e
    })
)

async function main() {
    await connectDB().catch(console.dir);

    app.addService(UserSvcService, UserServiceImplementations);

    let address = process.env.HOST + ":" + process.env.PORT;
    try {
        app.start(address).then(() => {
            console.log('Server started', address);
        });
    } catch (error) {
        throw error;
    }
}

main()

import * as bcrypt from 'bcrypt'
import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    tokensList: [{
        token: String,
        isActive: Boolean,
        lastUsed: String
    }],
    permissionsList: [String],
},
    // { timestamps: true }
)

UserSchema.pre('save', function (next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = async function (candidatePassword: any, userPassword: any, cb: any) {
    return await new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, userPassword, function (err, isMatch) {
            if (err) {
                reject();
                return cb(err);
            };
            resolve(cb(null, isMatch));
        });
    })
};

function SALT_WORK_FACTOR(SALT_WORK_FACTOR: any, arg1: (err: any, salt: any) => any) {
    throw new Error("Function not implemented.");
}

export const UserModel = mongoose.model('User', UserSchema);

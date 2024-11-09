import mongoose, {Schema, Document} from "mongoose";

export interface Message extends Document {
    content: string;
    createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema ({
    content:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now
    }
})

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessage: boolean;
    messages: Message[];
}

const UserSchema: Schema<User> = new Schema ({
    username:{
        type: String,
        required: [true, 'Please provide a username'],
        unique: true,
        trim: true
    },
    email:{
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        match: [ /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'please use a valid email address']
    },
    password:{
        type: String,
        required: [true, 'Password is required'],
    },
    verifyCode:{
        type: String,
        required: [true, 'Please provide a verification code']
    },
    verifyCodeExpiry:{
        type: Date,
        required: [true, 'Expiry date is required']
    },
    isVerified:{
        type: Boolean,
        default: false    
    },
    isAcceptingMessage:{
        type: Boolean,
        default: false    
    },
    messages:[MessageSchema]
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>('user', UserSchema)

export default UserModel
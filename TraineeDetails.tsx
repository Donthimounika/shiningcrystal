export default class Trainee {
    id: string;
    name: string;
    email: string;
    phoneNumber: number;
    constructor(args: any) {
        this.id = args.id;
        this.name = args.name;
        this.email = args.email;
        this.phoneNumber = args.phoneNumber;
    }
}
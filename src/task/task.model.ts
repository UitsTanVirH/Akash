export class Task{
    constructor(
        public firstName: string,
        public lastName: string,
        // public regRmn: number,
        // public altRmn: number,
        // public detailAdress: string,
        // public stbNo: number,
        // public stbType: string,
    ){}
}

export class CustomerType{
    constructor(
        public regularConnection: string,
        public corporateConnection: string,
    ){}
}
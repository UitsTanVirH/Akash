export class Task{
    constructor(
        public firstName: string,
        public lastName: string,
        public regRmn: number,
        public altRmn: number,
        public detailAddress: string,
        public addressWard: string, 
        public addressThana: string, 
        public addressDistrict: string,
        public packageName: string,
        public stbNo: number,
        public stbType: string,
        public customerType: string,
    ){}
}

export class CustomerType{
    constructor(
        public regIns: string,
        public corpIns: string,
        public vipIns: string,
        public buildIns: string,
        public bulkIns: string, 
        public multiIns: string,
    ){}
}
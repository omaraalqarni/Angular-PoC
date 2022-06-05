export class User {
  constructor(
    public name: string, 
    public details: [job: string, email: string, mobileNumber: string, twitterProfile?: string ],
  ) {}
}
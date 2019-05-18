import express from 'express';

class Server {

    public express: express.Application;

    constructor() {
        this.express = express();
        this.tst1();
    }

    private tst1(): void {
        // console.log('this', this)
        console.log(this.tst2());
    }

    private tst2(): string{
        return 'LOL'
    }
}
export default new Server().express;
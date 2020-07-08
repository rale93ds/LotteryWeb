import { Injectable } from '@angular/core';
import { HttpRequestService } from './http-request.service';

@Injectable()
export class LotteryService {
    constructor(private http: HttpRequestService) {

    }

    GetNumbers() {
        return this.http.get('http://lottery.raleservice.com/api/lottery/get');
    }

    GetWinNumbers() {
        return this.http.get('http://lottery.raleservice.com/api/lottery/getwinnumbers');
    }
}
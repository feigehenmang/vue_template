import { Observable } from 'rxjs'
import axios from 'axios'
export const request = (url: string, data: object) => {
    return Observable.create((observer: any) => {
        axios.get('http://www.liulongbin.top:3005/api/getlunbo')
        .then(
            res => {
                observer.next(res);
                observer.complete();
            },
            err => {
                observer.next(err);
                observer.complete();
            }
        )
    })
}
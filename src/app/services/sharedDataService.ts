import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class SharedDatService {
    private subject = new Subject<any>();

    sendMessage(message: string) {
        this.subject.next({ text: message });
    }

    onMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
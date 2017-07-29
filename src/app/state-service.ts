
import { Injectable } from '@angular/core';

@Injectable()
export class StateService {
    public disabled = {'page1': false, 'page2': true, 'page3': false};
}

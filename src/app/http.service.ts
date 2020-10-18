import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  test = "How r u?";
  constructor(private http: HttpClient) {}

  httpGet(url) {
    return this.http.get(url);
  }

  httpPost(url, {}) {
    return this.http.post(url, { name: "B" });
  }

  sendEmail(url, data) {
    return this.http.post(url, data);
  }

    sendEmailuni(url, unidata) {
    return this.http.post(url, unidata);
  }

  sendSmss(url, smsdata) {
    return this.http.post(url, smsdata);
  }







}

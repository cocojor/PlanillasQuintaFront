import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
    name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) { }

    transform(value: any): any {
        const url = this.sanitizer.bypassSecurityTrustResourceUrl(value);
        console.log('pipe', url, value);
        return url;
    }
}

/**
 * Copyright (c) 2017-2018 Structured Data, LLC
 * 
 * This file is part of BERT.
 *
 * BERT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Foobar is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Foobar.  If not, see <http://www.gnu.org/licenses/>.
 */

import { Base64 } from 'js-base64';

export class Utilities {

  /**
   * thanks to
   * https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string
   */
  static Uint8ToBase64(data:Uint8Array):string{

    let chunks = [];
    let block = 0x8000;
    for( let i = 0; i< data.length; i += block){
      chunks.push( String.fromCharCode.apply(null, data.subarray(i, i + block)));
    }
    return Base64.encode(chunks.join(""));

  }

  static VersionToNumber(version_string){
    let version = 0;
    if(version_string){
      version_string.split(/\./).forEach(component => {
        version *= 1000;
        version += Number(component||0)
      });
    }
    return version;
  }

}


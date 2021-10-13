---
layout: post
title: 블록 암호 운용모드 비교표
tag: [CISSP, ISMS-P]
published: True
---


Wikipedia [Block cipher mode of operation](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation){:target="_blank"}
참고하여 정리  


<style>.tbl td,.tbl th{text-align: center;}</style>
<table class="tbl" cellpadding="1" cellspacing="1" style="text-align:center;font-size: 12px;">
    <thead>
        <tr>
            <th scope="col">&nbsp;</th>
            <th scope="col">ECB<br />
                (Electronic<br />
                Codebook)
            </th>
            <th scope="col">CBC<br />
                (Cipher Block<br />
                Chaining)</th>
            <th scope="col">CFB<br />
                (Cipher<br />
                Feedback)</th>
            <th scope="col">OFB<br />
                (Output<br />
                Feedback)</th>
            <th scope="col">CTR<br />
                (Counter)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>-</th>
            <td>사용 X<br />KPA에 취약</td>
            <td>권장</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>권장</td>
        </tr>
        <tr>
            <th>병렬 암호화<br />
                (Encryption parallelizable)</th>
            <td>O</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>O</td>
        </tr>
        <tr>
            <th>병렬 복호화<br />
                (Decryption parallelizable)</th>
            <td>O</td>
            <td>O</td>
            <td>O</td>
            <td>X</td>
            <td>O</td>
        </tr>
        <tr>
            <th>IV<br />
                (Initialization Vector)</th>
            <td>X</td>
            <td>O</td>
            <td>O</td>
            <td>O</td>
            <td>X<br/>(Counter)</td>
        </tr>
        <tr>
            <th>오류 전파<br />
                (Error Propagation)</th>
            <td>X</td>
            <td>O</td>
            <td>O</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr>
            <th>사전 계산<br />
                (Precomputing Keystream)</th>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>O</td>
            <td>O</td>
        </tr>
        <tr>
            <th>임의 읽기<br />
                (Random read access)</th>
            <td>O</td>
            <td>O</td>
            <td>O</td>
            <td>X</td>
            <td>O</td>
        </tr>
    </tbody>
</table>  
<p></p>
  

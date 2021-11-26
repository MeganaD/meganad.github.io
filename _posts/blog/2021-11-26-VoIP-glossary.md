---
layout: post
title: VoIP 용어 정리 
tag: [CISSP,]
published: true
---

### VoIP 기술 분류 
- **전송 기술**: 멀티미디어 데이터를 전송하는 미디어 전송기술
- **QoS 기술**: 서비스 질을 향상
- **시그널링 기술**: 세션 연결 및 관리

![](../../img/2021-11-26-VoIP-glossary/2.png)  
[<출처: 참고자료 4>](#ref4)


### Protocols
- #### H.323
  - ITU(International Telecommunication Union) 에서 만든 표준
  - 화상 회의용으로 설계된 포괄적이고 복잡한 프로토콜
  - 화상 회의, 데이터 공유 및 VoIP와 같은 오디오 서비스 제공
  - H.323을 실행하는 모든 장치가 독립적으로 작동하도록 하는 피어 투 피어 프로토콜
  - **특별히 VoIP에 맞춰져 있지 않다**
  - 바이너리 기반
  - H.323 Protocol Suite
    - Video: H.261, H.263 ...
    - Audio: G.711, G.722, G.723.1, G.728, G.729 ... 
    - Data: T.122, T.124, T.125, T.126, T.127 ...
    - Transport: RTP, H.225, H.235, H.245, H.450.3, X.224.0 ...
- #### SIP(Session initiation protocol)
  - **VoIP 애플리케이션을 위해 특별히 개발**된 간소화된 프로토콜
  - IETF(Internet Engineering Task Force)에서 개발한 차세대 프로토콜
  - 가볍고 확장 가능한 프로토콜이지만 H.323 대비 기능 부족
  - Endpoint 간 세션을 설정(시작, 관리, 종료)
  - 오디오 및 비디오 전송을 위한 것이 아니며 단지 세션을 설정함.
  - 텍스트 기반(DNS, HTTPS 및 RTP와 같은 표준 활용)

- #### MGCP( Media Gateway Control Protocol )
  - IETF 표준
  - 엔드포인트 제어에 중점 (e.g., 통화 대기 등)
  - 중앙 집중식 구성 --> SPOF
- #### SCCP (Skinny client control protocol)
  - Cisco proprietary VOIP protocol

![](../../img/2021-11-26-VoIP-glossary/1.jpg)  
[<출처: 참고자료 1>](#ref1)

<br/>

_참고자료_
1. <a name="ref1" href="https://www.tta.or.kr/data/weekly_view.jsp?news_id=502" target="_blank">https://www.tta.or.kr/data/weekly_view.jsp?news_id=502</a>
2. [https://www.certificationkits.com/cisco-certification/ccna-voice-certification-topics-a-labs/ccna-voice-describe-voip-technologies/ccna-voice-h323-mgcp-sip-and-sccp-protocols/](https://www.certificationkits.com/cisco-certification/ccna-voice-certification-topics-a-labs/ccna-voice-describe-voip-technologies/ccna-voice-h323-mgcp-sip-and-sccp-protocols/){:target="_blank"}
3. [https://computer.howstuffworks.com/ip-telephony.htm](https://computer.howstuffworks.com/ip-telephony.htm){:target="_blank"}
4. <a name="ref4" href="https://sc1.checkpoint.com/documents/R80.10/WebAdminGuides/EN/CP_R80.10_VoIP_AdministrationGuide/html_frameset.htm?topic=documents/R80.10/WebAdminGuides/EN/CP_R80.10_VoIP_AdministrationGuide/87790" target="_blank">https://sc1.checkpoint.com/documents/R80.10/WebAdminGuides/EN/CP_R80.10_VoIP_AdministrationGuide/html_frameset.htm?topic=documents/R80.10/WebAdminGuides/EN/CP_R80.10_VoIP_AdministrationGuide/87790</a>


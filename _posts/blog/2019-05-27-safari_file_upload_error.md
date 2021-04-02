---
layout: post
title: file upload submit error on Safari
subtitle: 사파리에서 파일을 선택하지 않은 상태에서 sumit 할 경우 에러 발생
tag: [safari, spring, file upload, error]
published: true
---

크롬에서 잘되는 페이지가 사파리에서는 안된다는 클레임이 있었다.  
*Safari 버전 11.1.2(13605.3.8)*  

>HTTP Status 500 - Request processing failed; nested exception is org.springframework.web.multipart.MultipartException: Could not parse multipart servlet request; nested exception is org.apache.commons.fileupload.FileUploadException: the request was rejected because no multipart boundary was found

ajax로 submit 시키는 폼인데 저런 에러가 찍히고 있었다.  
결론적으로 파일을 선택하지 않은 파일 컨트롤을 삭제하고 submit 하니 처리 되었다.

```javascript
$("#btnSave").on("click", function(){
    //...
    $("input[type=file]").each(function() {
        if($(this).val() === "") {$(this).remove();}
    });
    //..
    //form submit
}
```

사파리 버그인지 구현의 문제인지 확실하지 않지만 위와 같이 처리해도 크롬에서도 정상적으로 작동하고 있다.



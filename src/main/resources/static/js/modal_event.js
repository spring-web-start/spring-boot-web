var action = '';
var url = '';
var type = '';
var bno = 0;

var title = '';
var contents = '';

var data;

$(document).ready(function () {

    //새 글 쓰기 버튼 클릭
    //id=createBtn인 태그를 찾아 이벤트 함수 적용
    $("#createBtn").click(function () {
        action = 'create';
        type = 'POST';

        //모달 제목 설정
        $("#modal-title").text("새 글 작성");

        //값 초기화
        $("#title").val('');
        $("#contents").val('');

        //modal 띄우기
        $("#myModal").modal();
    });

    //수정하기 버튼 클릭
    $("button[name='modify']").click(function () {
        action = 'modify';
        type = 'PUT';
        bno = this.value;

        //list.jsp의 input 태그의 Hidden type을 이용해 값 가져오기
        //ajax -> data로 db모든 정보 안담으면 초기화 되어버림
        title = $("#ti" + bno).val();
        contents = $("#co" + bno).val();

        $("#modal-title").text("수정하기");
        $("#title").val(title);
        $("#contents").val(contents);

        //modal 띄우기
        $("#myModal").modal();
    });

    //삭제하기 버튼 클릭
    //삭제하기 버튼 눌렀을 때 ajax에 설정된 url로 요청 + type까지 요청
    $("button[name='delete']").click(function () {
        bno = this.value;

        $("#modal-deleteTitle").text("게시글 삭제");
        $("#infoDelete").modal();

    });

    //Modal의 Submit 버튼 클릭
    $("#modalSubmit").click(function () {
        if (action === 'create') {
            //bno가 DB에 있으면 수정이고 DB없으면 DB 의존성(DB가 알아서 id값 넣어줌)
            bno = 0;
            url = '/board/list';

            data = {
                "bno": bno,
                "title": $("#title").val(),
                "contents": $("#contents").val()
            };
        } else if (action === 'modify') {
            url = '/board/list';

            data = {
                "bno": bno,
                "title": $("#title").val(),
                "contents": $("#contents").val()
            };
        }

        $.ajax({
        url: url,
        type: type,
        data: data,
        //complete 되면 reload
        complete: function (data) {
            location.reload();
        }
    });
});


    //==========================================================
    //게시판 Delete 버튼 이벤트
    //==========================================================
    //modalDelete 버튼 눌렀을 때
    $("#modalDeleteButton").click(function () {

        $.ajax({
            url: '/board/list/' + bno,
            type: 'DELETE',
            complete: function () {
                location.reload();
            }
        });
    });
});
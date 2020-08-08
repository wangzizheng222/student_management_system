function checkbox_select_all() {
    const id_checkbox_all=document.getElementsByName("checkbox_total");
    const id_checkbox = document.getElementsByName("id_checkbox");
    for(let i = 0; i < id_checkbox.length; i++){
        if (id_checkbox_all[0].checked){
            if(id_checkbox[i].checked){
            }
            else {
                id_checkbox[i].checked=true;
            }
        }
        else {
            if(id_checkbox[i].checked){
                id_checkbox[i].checked=false;
            }
        }
    }
}

function check(i,students) {
    document.getElementById("check").style.display="block";
    var value="";
    value=value+"<h2>查看学生信息</h2>\n" +
        "    <div>\n" +
        "        <span>学号</span>\n" +
        "        <span>"+students[i].id+"</span>\n" +
        "    </div>\n" +
        "    <div>\n" +
        "        <span>姓名</span>\n" +
        "        <span>"+students[i].name+"</span>\n" +
        "    </div>\n" +
        "    <div>\n" +
        "        <span>性别</span>\n" +
        "        <span>"+students[i].sex+"</span>\n" +
        "    </div>\n" +
        "    <div>\n" +
        "        <span>学院</span>\n" +
        "        <span>"+students[i].college+"</span>\n" +
        "    </div>\n" +
        "    <div>\n" +
        "        <span>专业</span>\n" +
        "        <span>"+students[i].major+"</span>\n" +
        "    </div>\n" +
        "    <div>\n" +
        "        <span>年级</span>\n" +
        "        <span>"+students[i].grade+"</span>\n" +
        "    </div>\n" +
        "    <div>\n" +
        "        <span>班级</span>\n" +
        "        <span>"+students[i].class+"</span>\n" +
        "    </div>\n" +
        "        <div>\n" +
        "        <span>年龄</span>\n" +
        "        <span>"+students[i].age+"</span>\n" +
        "    </div>\n" +
        "    <div>\n" +
        "        <span>创建时间</span>\n" +
        "        <span>"+students[i].hobby+"</span>\n" +
        "    </div>\n" +
        "\n" +
        "    <button class=\"btn\" onclick=\"check_cancel()\">取消</button>"
    document.getElementById("check").innerHTML=value;
}

function check_cancel() {
    document.getElementById("check").style.display="none";
}

function alt_cancel() {

    document.getElementById("alt").style.display="none";
}

function alt(i,students) {
    document.getElementById("alt_student_id").value=i;
    document.getElementById("alt").style.display="block";

    document.getElementById("alt_id").value=students[i].id;
    document.getElementById("alt_name").value=students[i].name;
    if (students[i].sex==="男"){
        document.getElementsByName("alt_sex")[0].checked=true;
    }
    else {
        document.getElementsByName("alt_sex")[1].checked=true;
    }
    document.getElementById("alt_college").value=students[i].college;
    document.getElementById("alt_major").value=students[i].major;
    document.getElementById("alt_grade").value=students[i].grade;
    document.getElementById("alt_class").value=students[i].class;
    document.getElementById("alt_age").value=students[i].age;
    document.getElementById("alt_hobby").value=students[i].hobby;
}

function show_add() {
    document.getElementById("add").style.display="block";
}

function cancel_add() {
            document.getElementById("add").style.display="none";
        }

function submit_add() {
	class Students{

	}

	const new_student = new Students();

	let sex;
	if (document.getElementsByName("sex")[0].checked){
		sex="男";
	}
	else sex="女";

    let date="";
    let d=new Date();
    let year=d.getFullYear();
    let month=d.getMonth();
    let day=d.getDay();
    let hour=d.getHours();
    let min=d.getMinutes();
    date=year+"-"+month+"-"+day+" "+hour+":"+min;

	new_student.id=document.getElementById("id").value;
	new_student.name=document.getElementById("name").value;
	new_student.sex=sex;
	new_student.college=document.getElementById("college").value;
	new_student.major=document.getElementById("major").value;
	new_student.grade=document.getElementById("grade").value;
	new_student.class=document.getElementById("class").value;
	new_student.age=document.getElementById("age").value;
	// new_student.hobby=document.getElementById("hobby").value;
    new_student.hobby=date;

	if (new_student.id!=="" && new_student.name!=="" && new_student.sex!==""
		&& new_student.college!=="" && new_student.major!=="" && new_student.grade!==""
		&& new_student.college!=="" && new_student.age!=="" && new_student.hobby!==""){
		var r=confirm("确认增加数据？")
		if (r===true){
			//新增数据
			students_storage[students_storage.length]=new_student;

			// stu.data().total_page=Math.ceil(students_storage.length/10)
			students_storage.push()
			//存储数据
			save_data(students_storage);
			// //刷新界面
			// print_table(students);

			cancel_add();
			location.reload()
		}
	}
	else {
		alert("所有字段不能为空")
	}

}

function submit_alt() {
    class Students{

    }

    const new_student = new Students();

    let sex;
    if (document.getElementsByName("alt_sex")[0].checked){
        sex="男";
    }
    else sex="女";

    new_student.id=document.getElementById("alt_id").value;
    new_student.name=document.getElementById("alt_name").value;
    new_student.sex=sex;
    new_student.college=document.getElementById("alt_college").value;
    new_student.major=document.getElementById("alt_major").value;
    new_student.grade=document.getElementById("alt_grade").value;
    new_student.class=document.getElementById("alt_class").value;
    new_student.age=document.getElementById("alt_age").value;
    new_student.hobby=document.getElementById("alt_hobby").value;

    if (new_student.id!=="" && new_student.name!=="" && new_student.sex!==""
        && new_student.college!=="" && new_student.major!=="" && new_student.grade!==""
        && new_student.college!=="" && new_student.age!=="" && new_student.hobby!==""){
        //新增数据
        let i=document.getElementById("alt_student_id").value;
        i=parseInt(i);

		//更新数组内容
        students_storage[i]=new_student;

		//强制重新渲染视图
		students_storage.push()

        //存储数据
        save_data(students_storage);
        // //刷新界面
        // print_table(students);

        alt_cancel();
        alert("已修改数据！")
    }
    else {
        alert("所有字段不能为空")
    }
}

function refresh_data() {

    let r=confirm("确认初始化数据？")
    if (r===true){
        save_data(init_data())
        students_storage = localStorage.my_data;
        students_storage = JSON.parse(students);
        document.getElementById("page").value=2;
        document.getElementById("current_page").value=1;

		students_storage.push();
		location.reload()
    }
}

function save_data(students) {
    var value=JSON.stringify(students);
    localStorage.setItem("my_data",value);
}





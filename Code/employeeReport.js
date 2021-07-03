export default class Report{
    #Name;
    #LateNo;
    #Username;
    #AttendanceNo;
    #AbscenceNo;
    constructor(_name,_username,_attendanceNo,_abscenceNo,_lateNo){
        this.#Name = _name;
        this.#Username = _username;
        this.#AttendanceNo = _attendanceNo;
        this.#AbscenceNo = _abscenceNo;
        this.#LateNo = _lateNo;
    }
    set Name(_name){
        this.#Name = _name;
    }
    get Name(){
        return this.#Name;
    }
    set Username(_username){
        this.#Username = _username;
    }
    get Username(){
        return this.#Username;
    }
    set AttendanceNo(_attendanceNo){
        this.#AttendanceNo = _attendanceNo;
    }
    get AttendanceNo(){
        return this.#Username;
    }
    set AbscenceNo(_abscenceNo){
        this.#AbscenceNo = _abscenceNo;
    }
    get AbscenceNo(){
        return this.#Username;
    }
    set LateNo(_lateNo){
        this.#LateNo = _lateNo;
    }
    get LateNo(){
        return this.#LateNo;
    }

}
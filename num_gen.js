function addNum() {
    var list = document.getElementById("number_list");
    let new_num = Math.floor(Math.random() * 100);
    list.innerHTML += ('<li class="rand_num">'+new_num+'</li>');
}

function removeNum() {
    var list = document.getElementById("number_list");
    const cur_nums = document.querySelectorAll(".rand_num");
    if(cur_nums.length > 1) {
        list.removeChild(cur_nums[0]);
    } 
}

function regenNums() {
    const cur_nums = document.querySelectorAll(".rand_num");
    cur_nums.forEach(giveNewNum);

    function giveNewNum(item) {
        let new_num = Math.floor(Math.random() * 100);
        item.innerHTML = new_num;
    }
}
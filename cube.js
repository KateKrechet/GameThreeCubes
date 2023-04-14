let x = frandom(10, 18)
$('.rival').html('<h3>Ход компьютера: ' + x + '</h3>')
let inp = 0
$('#steps').text('' + inp + '')
let inp_ost = 4
$('#step').text('' + inp_ost + '')
let random1 = 0
let random2 = 0
let random3 = 0
let sum = 0
$('#result').text('' + sum + '')
const luser = [1, 2, 3]
const win = [4, 5, 6]
const combination = []
const empty = []
// функция перезагрузки страницы
function reload(time) {
    location.reload()
}
// функция формирования случ числа в диапазоне
function frandom(min, max) {
    let x = Math.floor(Math.random() * (max - min + 1)) + min
    return x
}
// функция записи в массив чисел с кубиа для сравнения со счастливой/несчастливой комбинацией
function masoper() {
    combination.splice(0, 3)
    combination.push(random1)
    combination.push(random2)
    combination.push(random3)
    $('#mas').text('' + combination.sort() + '')

}
// функция присваивания картинок в зависисмости от номера кубика и выпавшего числа
function NumbersToPictures(x, y) {
    if (x === 1) {
        $('#cube_' + y + '').html('<img src="1.jpg" width="100%" height="100%">')
    } else if (x === 2) {
        $('#cube_' + y + '').html('<img src="2.jpg" width="100%" height="100%">')
    } else if (x === 3) {
        $('#cube_' + y + '').html('<img src="3.jpg" width="100%" height="100%">')
    } else if (x === 4) {
        $('#cube_' + y + '').html('<img src="4.jpg" width="100%" height="100%">')
    } else if (x === 5) {
        $('#cube_' + y + '').html('<img src="5.jpg" width="100%" height="100%">')
    } else if (x === 6) {
        $('#cube_' + y + '').html('<img src="6.jpg" width="100%" height="100%">')
    }
}
//функция результата при нажатии кнопки Конец хода (проверка на комбинацию и количество попыток останавливают игру автоматом
function Ending() {
    if (x > sum) {
        $('#hresult').text('Вы проиграли!')
    } else if (x < sum) {
        $('#hresult').text('Вы выиграли!')
    } else if (x === sum) {
        $('#hresult').text('Ничья!')
    }
    $('#put_3cubes').prop('disabled', true)
    $('.ButtonCube').prop('disabled', true)
    $('#put_1cube').prop('disabled', true)
    $('#put_2cube').prop('disabled', true)
    $('#put_3cube').prop('disabled', true)
    setTimeout(reload, 3000)
}
// функция сравнения 2 чисел, используется и при броске 1 кубика, так как попытки могут закончиться и при перебросе
function comparison() {
    if (combination.toString() === luser.toString()) {
        $('#hresult').text('Вы проиграли!')
        setTimeout(reload, 3000)
    } else if (combination.toString() === win.toString()) {
        $('#hresult').text('Вы выиграли!')
        setTimeout(reload, 3000)
    } else if (inp >= 4) {
        Ending()
    }
}
// бросаем 3 кубика
function PutAllCubes() {
    $('#put_1cube').prop('disabled', false)
    $('#put_2cube').prop('disabled', false)
    $('#put_3cube').prop('disabled', false)
    random1 = frandom(1, 6)
    random2 = frandom(1, 6)
    random3 = frandom(1, 6)
    sum = random1 + random2 + random3
    $('#result').text('' + sum + '')

    NumbersToPictures(random1, 1)
    NumbersToPictures(random2, 2)
    NumbersToPictures(random3, 3)
    inp += 1
    $('#steps').text('' + inp + '')
    inp_ost -= 1
    $('#step').text('' + inp_ost + '')
    masoper()
    comparison()

}
// бросаем 1 кубик
function PutOneCube(num) {
    switch (num) {
        case 1: {
            random1 = frandom(1, 6)
            NumbersToPictures(random1, num)
            break
        }
        case 2: {

            random2 = frandom(1, 6)
            NumbersToPictures(random2, num)
            break
        }
        case 3: {

            random3 = frandom(1, 6)
            NumbersToPictures(random3, num)
            break
        }
        default: {
            break
        }
    }
    sum = random1 + random2 + random3
    $('#result').text('' + sum + '')
    inp += 1
    $('#steps').text('' + inp + '')
    inp_ost -= 1
    $('#step').text('' + inp_ost + '')
    masoper()
    comparison()
}
// при обновлении страницы активна кнопка только для броска 3 кубиков
$(document).ready(function () {
    $('#put_3cubes').prop('disabled', false)
    $('.ButtonCube').prop('disabled', false)
    $('#put_1cube').prop('disabled', true)
    $('#put_2cube').prop('disabled', true)
    $('#put_3cube').prop('disabled', true)
})

$('#put_3cubes').click(PutAllCubes)

$('.ButtonCube').click(Ending)

$('#put_1cube').click(function () {
    PutOneCube(1)
})

$('#put_2cube').click(function () {
    PutOneCube(2)
})
$('#put_3cube').click(function () {
    PutOneCube(3)
})




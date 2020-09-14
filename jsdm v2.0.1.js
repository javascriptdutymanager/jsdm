/*                                                          28/08/2020
                                    #######################################################
                                    #                                                     #
                                    #        SDM - Script Duty Manager                    #      
                                    #        Onwer - http://vk.com/satosempai             #
                                    #        Date of Crate - 28/08/2020 +- 21:00          #
                                    #        Thanks to: @monixlite, @danya_sel [VK]       #
                                    #                                                     #
                                    #######################################################
*/
let dateFocusTime = new Date().toLocaleTimeString();
// Внешнее время
let dateFocusDate = "Сегодня";
// Внешняя дата
let main = 1;
let startBotV2 = setInterval(function() {
    function getWeekDay(date) {
        let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        return days[date.getDay()];
    }
    let adminListID = [];
    // id
    let moderListID = [];
    // id
    let helperListID = [];
    // id
    let owneristID = [];
    // id

    let owner = [];
    // Разработчики
    let adminList = [];
    // Администраторы
    let moderList = [];
    // Модераторы
    let helperList = [];
    // Помощники
    let commandsList = [".к тех", ".к инфо", ".к пинг", ".к деж", ".к напиши", ".к реши", ".к рандом", ".к выполни", ".к админы", ".к дата", ".к профиль", ".к чек"];
    let randomNum = Math.round(Math.random() * 596179350);
    let date = new Date();
    let dateTime = new Date().toLocaleTimeString();
    let dateFull = new Date().toLocaleDateString();
    let status = ["Пользователь", "Помощники", "Модератор", "Администратор", "Разработчик"];
    let userName = document.querySelector(".top_profile_name").innerText;
    let userLink = document.querySelector("a[class='left_row']").getAttribute("href").slice(1);
    let openCase = document.querySelectorAll("span[class='im-right-menu--text _im_r_tx']");
    let audio = document.querySelector("div[class='top_audio_player_title_wrap']");
    let playNow = "";
    let playOrStart = document.querySelector("div[class='blind_label _top_audio_player_play_blind_label']");
    // play or start
    if (playOrStart.innerText == "Приостановить") {
        playNow = "Сейчас играет Аудиозапись: ";
    } else {
        playNow = "Сейчас на паузе Аудиозапись: ";
    }
    let allTagInWeb = document.querySelectorAll("*").length;
    let fullName = document.querySelector("img[class='top_profile_vkconnect_img']").getAttribute("alt");
    let replyFullFullName = document.querySelectorAll("a[class='im-replied--author-link _im_replied_author_link']");
    let replyFullLink = document.querySelectorAll("a[class='im-replied--author-link _im_replied_author_link']")
    let profileInfo = {
        name: `@${userLink}(${fullName}).`,
        balance: `${vk.balance}`,
        openDialog: `${openCase.length}`,
        openDialogLast: `${openCase[0].innerText}`,
        openDialogFirst: `${openCase[openCase.length - 1].innerText}`,
        audio: `${audio.innerText}`,
        messageCount: `${vk.counts.msg}`,
        playNow: `${playNow}`
    }
    let userInformation = {
        borowser: `${browser.version}`,
        userInfo: `${status[4]}: @${userLink}(${userName}).`,
        uuid: `${vk.id}`,
        onwer: `${owneristID.length}.`,
        admin: `${adminListID.length}.`,
        moder: `${moderListID.length}.`,
        helper: `${helperListID.length}.`,
        command: `11/12`
    }
    let techInfo = {
        speedInternet: `${navigator.connection.downlink}`,
        browserName: `${navigator.appCodeName}`,
        platform: `${navigator.platform}`,
        vkMethod: `${vk.loginscheme}`,
        vkUIID: `${vkUUID}`,
        country: `${vk.countryISO}`,
        webTag: `${allTagInWeb}`
    }
    let lastSendMessage = document.querySelectorAll("div[class='im-mess--text wall_module _im_log_body']");
    let lastMessageFrom = document.querySelectorAll("a[class='im-mess-stack--lnk']");
    let inputValue = document.querySelector("div[class='im_editable im-chat-input--text _im_text']");
    let buttonSendMessage = document.querySelector(".im-chat-input--send");
    let lastFocusMessage = lastSendMessage[lastSendMessage.length - 1].innerText;
    let lastFocusMessageHtml = lastSendMessage[lastSendMessage.length - 1].innerHTML;
    let lastFocusName = lastMessageFrom[lastMessageFrom.length - 1].innerText;
    let secondsFouc = 1;
    let mSecondsFouc = 1;
    let userAccess = [];
    let randomPing = Math.round(Math.random * 354);
    
    function TechInformation(messageTxt, input, send, from, admin) {
        //1
        for (let adm = 0; adm < admin.length; adm++) {
            if (messageTxt === ".к тех" && lastFocusName === admin[adm] || messageTxt === ".к тех" && lastFocusName === owner[adm]) {
                setTimeout(function() {
                    input.innerHTML = `Данные с открытого источника:<br><br>
                                       Скорость интернета: ${techInfo.speedInternet}Mb/s<br>
                                       Браузер: ${techInfo.browserName}<br>
                                       Платформа: ${techInfo.platform}<br>
                                       Метод: ${techInfo.vkMethod}<br>
                                       VK UUID: ${techInfo.vkUIID}<br>
                                       Страна: ${techInfo.country}<br>
                                       Всего тегов на (текущей) странице: ${techInfo.webTag}`;
                    send.click();
                }, 200)
            }
        }
    }
    TechInformation(lastFocusMessage, inputValue, buttonSendMessage, lastFocusName, adminList);

    function information(messageTxt, input, send, from, admin, info) {
        //2
        for (let adm = 0; adm < admin.length; adm++) {
            if (messageTxt === ".к инфо" && lastFocusName === admin[adm] || messageTxt === ".к инфо" && lastFocusName === owner[adm]) {
                setTimeout(function() {
                    setTimeout(function() {
                        dateFocusDate = "Вчера";
                    }, 86400000);
                    setTimeout(function() {
                        dateFocusDate = "Позавчера";
                    }, 172800000);
                    setTimeout(function() {
                        dateFocusDate = new Date().toLocaleDateString();
                    }, 259200000);
                    input.innerHTML = `Информация JSDM 2.1<br>
                                       ${info.userInfo}<br>
                                       Бот был запущен: ${dateFocusDate} в ${dateFocusTime}<br>
                                       Запущен на: Google Chrome version[${info.borowser}]<br>
                                       Рабочих команд: ${info.command}<br>
                                       Доп. 12-я команда на тех-работах<br>
                                       Последнее обновление: 04/09/2020 в 18:40 (МСК)<br><br>
                                       Разработчиков: ${info.onwer}<br>
                                       Администраторов: ${info.admin}<br>
                                       Модераторов: ${info.moder}<br>
                                       Помощников: ${info.helper}<br>`
                    send.click();
                }, 200)
            }
        }
    }
    information(lastFocusMessage, inputValue, buttonSendMessage, lastFocusName, adminList, userInformation);
    function ping(messageTxt, input, send, from, admin) {
        //4
        setInterval(function() {
            secondsFouc++;
        }, 10000);
        setInterval(function() {
            mSecondsFouc++;
        }, 10);

        for (let adm = 0; adm < admin.length; adm++) {
            if (messageTxt === ".к пинг" && lastFocusName === admin[adm] || messageTxt === ".к пинг" && lastFocusName === owner[adm]) {
                setTimeout(function() {
                    input.innerHTML = `ПОНГ TP<br>Ответ через: ${secondsFouc}.${mSecondsFouc}с.<br>Ответ без прин. задержки: 0.1с.`;
                    send.click();
                }, 253);
            }
        }
        setTimeout(function() {
            secondsFouc = 0;
            mSecondsFouc = 1;
        }, 180);
    }
    ping(lastFocusMessage, inputValue, buttonSendMessage, lastFocusName, adminList);

    function duty(messageTxt, input, send, from, admin) {
        //4
        setInterval(function() {
            secondsFouc++;
        }, 10000);
        setInterval(function() {
            mSecondsFouc++;
        }, 10);

        for (let adm = 0; adm < admin.length; adm++) {
            if (messageTxt === ".к деж" && lastFocusName === admin[adm] || messageTxt === ".к деж" && lastFocusName === owner[adm]) {
                setTimeout(function() {
                    input.innerHTML = `✅ На месте! 2.0<br>Ответ через: ${secondsFouc}.${mSecondsFouc}с.<br>Ответ без прин. задержки: 0.1с.`;
                    send.click();
                }, 253);
            }
        }
        setTimeout(function() {
            secondsFouc = 0;
            mSecondsFouc = 1;
        }, 180);
    }
    duty(lastFocusMessage, inputValue, buttonSendMessage, lastFocusName, adminList);

    function say(messageTxt, input, send, from, admin) {
        //5
        for (let adm = 0; adm < admin.length; adm++) {
            if (messageTxt.split(".к напиши<br>")[1] && !messageTxt.split(".к напиши<br>")[0] && lastFocusName == admin[adm] || messageTxt.split(".к напиши<br>")[1] && !messageTxt.split(".к напиши<br>")[0] && lastFocusName == owner[adm]) {
                setTimeout(function() {
                    input.innerHTML = messageTxt.split(".к напиши<br>")[1];
                    send.click();
                }, 200)
            }
        }
    }
    say(lastFocusMessageHtml, inputValue, buttonSendMessage, lastFocusName, adminList);

    function decide(messageTxt, input, send, from, admin) {
        //6
        for (let adm = 0; adm < admin.length; adm++) {
            if (messageTxt.split(".к реши")[1] && !messageTxt.split(".к реши")[0] && lastFocusName == admin[adm] || messageTxt.split(".к реши")[1] && !messageTxt.split(".к реши")[0] && lastFocusName == helperList[adm] || messageTxt.split(".к реши")[1] && !messageTxt.split(".к реши")[0] && lastFocusName == owner[adm]) {
                setTimeout(function() {
                    input.innerHTML = `${messageTxt.split(".к реши")[1]} = ${eval(messageTxt.split(".к реши")[1])}`
                    send.click();
                }, 200)
            }
        }
    }
    decide(lastFocusMessage, inputValue, buttonSendMessage, lastFocusName, adminList);

    function random(messageTxt, input, send, from, admin) {
        //7
        for (let adm = 0; adm < admin.length; adm++) {
            if (messageTxt === ".к рандом" && lastFocusName === admin[adm] || messageTxt === ".к рандом" && lastFocusName === helperList[adm] || messageTxt === ".к рандом" && lastFocusName === owner[adm]) {
                setTimeout(function() {
                    input.innerHTML = `Рандомное число... ${randomNum}`
                    send.click();
                }, 200)
            }
        }
    }
    random(lastFocusMessage, inputValue, buttonSendMessage, lastFocusName, adminList);

    function js(messageTxt, input, send, from, admin) {
        //8
        for (let adm = 0; adm < admin.length; adm++) {
            if (messageTxt.split(".к выполни ")[1] && !messageTxt.split(".к выполни ")[0] && lastFocusName == admin[adm] || messageTxt.split(".к выполни ")[1] && !messageTxt.split(".к выполни ")[0] && lastFocusName == owner[adm]) {
                setTimeout(function() {
                    eval(messageTxt.split(".к выполни ")[1]);
                    input.innerHTML = `Function: ${messageTxt.split(".к выполни ")[1]}`
                    send.click();
                }, 200)
            }
        }
    }
    js(lastFocusMessage, inputValue, buttonSendMessage, lastFocusName, adminList);

    function adminSource(messageTxt, input, send, from, admin, info) {
        //9
        for (let adm = 0; adm < admin.length; adm++) {
            if (messageTxt === ".к админы" && lastFocusName === admin[adm] || messageTxt === ".к админы" && lastFocusName === owner[adm]) {
                setTimeout(function() {
                    if (owneristID[0] === undefined) {
                        owneristID.push("Никто пока-что не назначен.");
                    }
                    if (adminListID[0] === undefined) {
                        adminListID.push("Никто пока-что не назначен.");
                    }
                    if (moderListID[0] === undefined) {
                        moderListID.push("Никто пока-что не назначен.");
                    }
                    if (helperListID[0] === undefined) {
                        helperListID.push("Никто пока-что не назначен.");
                    }
                    input.innerHTML = `• Список Разработчиков:<br> ${owneristID}<br><br>
                                       • Список Администраторов:<br> ${adminListID}<br><br>
                                       • Список Модераторов:<br> ${moderListID}<br><br>
                                       • Список Помощников:<br> ${helperListID}`;
                    send.click();
                }, 200)
            }
        }
    }
    adminSource(lastFocusMessage, inputValue, buttonSendMessage, lastFocusName, adminList, userInformation);

    function data(messageTxt, input, send, from, admin, info) {
        //10
        for (let adm = 0; adm < admin.length; adm++) {
            if (messageTxt === ".к дата" && lastFocusName === admin[adm] || messageTxt === ".к дата" && lastFocusName === owner[adm]) {
                setTimeout(function() {
                    input.innerHTML = `Сегодня, ${getWeekDay(date)}<br>Время: ${dateTime}<br>Дата: ${dateFull}`
                    send.click();
                }, 200)
            }
        }
    }
    data(lastFocusMessage, inputValue, buttonSendMessage, lastFocusName, adminList);

    function profile(messageTxt, input, send, from, admin, info) {
        //11
        for (let adm = 0; adm < admin.length; adm++) {
            if (messageTxt === ".к профиль" && lastFocusName === admin[adm] || messageTxt === ".к профиль" && lastFocusName === owner[adm]) {
                setTimeout(function() {
                    input.innerHTML = `Профиль: ${profileInfo.name}<br>
                                       Голосов: ${profileInfo.balance}<br>
                                       Откртых диалогов: ${profileInfo.openDialog}<br>
                                       Последний открытый диалог: «${profileInfo.openDialogLast}»<br>
                                       Первый открытый диалог: «${profileInfo.openDialogFirst}»<br>
                                       ${profileInfo.playNow} «${profileInfo.audio}»<br>
                                       Непрочитанных диалогов: ${profileInfo.messageCount}`
                    send.click();
                }, 200)
            }
        }
    }
    profile(lastFocusMessage, inputValue, buttonSendMessage, lastFocusName, adminList);
}, 500);
let clearCount = 1;
let timeout = 1;
// Флуд чистки (Можно отключить) в консоль, интервал в секундах
let clear = setInterval(function() {
    console.log(`[${clearCount}] Cleaning the console - Running [Timeout ${timeout}s]`);
    clearCount++;
}, `${timeout}000`);

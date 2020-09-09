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

    function getWeekMonth(date) {
        let month = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
        return month[date.getMonth()];
    }
    let owneristID = [];
    // id owner
    let ownerListID = [];
    // id owner
    let moderListID = [];
    // id moder
    let helperListID = [];
    // id helper

    // Разработчики
    let ownerList = [];
    // Администраторы
    let moderList = [];
    // Модераторы
    let helperList = [];
    // Помощники
    let prefix = [".к", ".л", ".ц", ".ч"];
    let idCommands = [`id`, `ид`, `айди`];
    // префикс
    let status = ["Пользователь", "Помощник", "Модератор", "Администратор", "Разработчик"];
    let randomNum = Math.round(Math.random() * 541351);
    let date = new Date();
    let dateTime = new Date().toLocaleTimeString();
    let dateFull = new Date().toLocaleDateString();
    let userName = document.querySelector(".top_profile_name").innerText;
    let userLink = document.querySelector("a[class='left_row']").getAttribute("href").slice(1);
    let openCase = document.querySelectorAll("span[class='im-right-menu--text _im_r_tx']");
    let audio = document.querySelector("div[class='top_audio_player_title_wrap']");
    let allTagInWeb = document.querySelectorAll("*").length;
    let fullName = document.querySelector("img[class='top_profile_vkconnect_img']").getAttribute("alt");
    let replyFullFullName = document.querySelectorAll("a[class='im-replied--author-link _im_replied_author_link']");
    let replyFullLink = document.querySelectorAll("a[class='im-replied--author-link _im_replied_author_link']")
    let chatName = document.querySelector("a[class='im-page--title-main-inner _im_page_peer_name']").innerText;
    let ulItemChatid = document.querySelectorAll("ul[class='im-page--dcontent ui_clean_list _im_page_dcontent'] > li");
    let lastSendMessage = document.querySelectorAll("div[class='im-mess--text wall_module _im_log_body']");
    let lastMessageFrom = document.querySelectorAll("a[class='im-mess-stack--lnk']");
    let inputValue = document.querySelector("div[class='im_editable im-chat-input--text _im_text']");
    let buttonSendMessage = document.querySelector(".im-chat-input--send");
    let lastFocusMessage = lastSendMessage[lastSendMessage.length - 1].innerText;
    let lastFocusMessageHtml = lastSendMessage[lastSendMessage.length - 1].innerHTML;
    let lastFocusName = lastMessageFrom[lastMessageFrom.length - 1].innerText;
    let secondsFouc = 1;
    let mSecondsFouc = 1;
    let randomPing = Math.round(Math.random * 1000000);
    let playNow = "";
    let playOrStart = document.querySelector("div[class='blind_label _top_audio_player_play_blind_label']");
    // play or start
    if (playOrStart.innerText == "Приостановить") {
        playNow = "Сейчас играет Аудиозапись: ";
    } else {
        playNow = "Сейчас на паузе Аудиозапись: ";
    }
    const profileInfo = {
        name: `@${userLink}(${fullName}).`,
        balance: `${vk.balance}`,
        openDialog: `${openCase.length}`,
        openDialogLast: `${openCase[0].innerText}`,
        openDialogFirst: `${openCase[openCase.length - 1].innerText}`,
        bugTracker: `false`,
        audio: `${audio.innerText}`,
        messageCount: `${vk.counts.msg}`,
        playNow: `${playNow}`
    }
    const userInformation = {
        borowser: `${browser.version}`,
        userInfo: `${status[4]}: @${userLink}(${userName}).`,
        onwer: `${owneristID.length}.`,
        admin: `${ownerListID.length}.`,
        moder: `${moderListID.length}.`,
        helper: `${helperListID.length}.`,
        command: `12`
    }
    const techInfo = {
        speedInternet: `${navigator.connection.downlink}`,
        browserName: `${navigator.appCodeName}`,
        platform: `${navigator.platform}`,
        vkMethod: `${vk.loginscheme}`,
        vkUIID: `${vkUUID}`,
        country: `${vk.countryISO}`,
        webTag: `${allTagInWeb}`
    }
    function TechInformation(messageTxt, input, send, from, owner) {
        //1
        for (let adm = 0; adm < owner.length; adm++) {
            for (let prefixid = 0; prefixid < prefix.length; prefixid++) {
                if (messageTxt === `${prefix[prefixid]} тех` && lastFocusName === owner[adm]) {
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
    }
    TechInformation(lastFocusMessage, inputValue, buttonSendMessage, lastFocusName, ownerList);

    function information(messageTxt, input, send, from, owner, info) {
        //2
        for (let adm = 0; adm < owner.length; adm++) {
            for (let prefixid = 0; prefixid < prefix.length; prefixid++) {
                if (messageTxt === `${prefix[prefixid]} инфо` && lastFocusName === owner[adm]) {
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
                        input.innerHTML = `Информация JSDM 2.2<br>
                                       ${info.userInfo}<br>
                                       Бот был запущен: ${dateFocusDate} в ${dateFocusTime}<br>
                                       Запущен на: Google Chrome version[${info.borowser}]<br>
                                       Рабочих команд: ${info.command}<br>
                                       Последнее обновление: 09/09/2020 в 18:04 (МСК)<br><br>
                                       Разработчиков: ${info.onwer}<br>
                                       Администраторов: ${info.owner}<br>
                                       Модераторов: ${info.moder}<br>
                                       Помощников: ${info.helper}<br>`
                        send.click();
                    }, 200)
                }
            }
        }
    }
    information(lastFocusMessage, inputValue, buttonSendMessage, lastFocusName, ownerList, userInformation);

    function ping(messageTxt, input, send, from, owner) {
        //4
        setInterval(function() {
            secondsFouc++;
        }, 10000);
        setInterval(function() {
            mSecondsFouc++;
        }, 10);

        for (let adm = 0; adm < owner.length; adm++) {
            for (let prefixid = 0; prefixid < prefix.length; prefixid++) {
                if (messageTxt === `${prefix[prefixid]} пинг` && lastFocusName === owner[adm]) {
                    setTimeout(function() {
                        input.innerHTML = `ПОНГ TP<br>
									  Ответ через: ${secondsFouc}.${mSecondsFouc}с.<br>
									  Ответ без прин. задержки: 0.1с.`;
                        send.click();
                    }, 253);
                }
            }
        }
        setTimeout(function() {
            secondsFouc = 0;
            mSecondsFouc = 1;
        }, 180);
    }
    ping(lastFocusMessage, inputValue, buttonSendMessage, lastFocusName, ownerList);

    function duty(messageTxt, input, send, from, owner) {
        //4
        setInterval(function() {
            secondsFouc++;
        }, 10000);
        setInterval(function() {
            mSecondsFouc++;
        }, 10);

        for (let adm = 0; adm < owner.length; adm++) {
            for (let prefixid = 0; prefixid < prefix.length; prefixid++) {
                if (messageTxt === `${prefix[prefixid]} деж` && lastFocusName === owner[adm]) {
                    setTimeout(function() {
                        input.innerHTML = `✅ На месте! 2.0<br>
									  Ответ через: ${secondsFouc}.${mSecondsFouc}с.<br>
									  Ответ без прин. задержки: 0.1с.`;
                        send.click();
                    }, 253);
                }
            }
        }
        setTimeout(function() {
            secondsFouc = 0;
            mSecondsFouc = 1;
        }, 180);
    }
    duty(lastFocusMessage, inputValue, buttonSendMessage, lastFocusName, ownerList);

    function say(messageTxt, input, send, from, owner) {
        //5
        for (let adm = 0; adm < owner.length; adm++) {
            for (let prefixid = 0; prefixid < prefix.length; prefixid++) {
                if (messageTxt.split(`${prefix[prefixid]} напиши<br>`)[1] && !messageTxt.split(`${prefix[prefixid]} напиши<br>`)[0] && lastFocusName == owner[adm]) {
                    setTimeout(function() {
                        input.innerHTML = messageTxt.split(`${prefix[prefixid]}напиши<br>`)[1];
                        send.click();
                    }, 200)

                }
            }
        }
    }
    say(lastFocusMessageHtml, inputValue, buttonSendMessage, lastFocusName, ownerList);

    function decide(messageTxt, input, send, from, owner) {
        //6
        for (let adm = 0; adm < owner.length; adm++) {
            for (let prefixid = 0; prefixid < prefix.length; prefixid++) {
                if (messageTxt.split(`${prefix[prefixid]} реши `)[1] && !messageTxt.split(`${prefix[prefixid]} реши `)[0] && lastFocusName == owner[adm]) {
                    setTimeout(function() {
                        input.innerHTML = `${messageTxt.split(`${prefix[prefixid]} реши `)[1]} = ${eval(messageTxt.split(`${prefix[prefixid]} реши `)[1])}`
                        send.click();
                    }, 200)
                }
            }
        }
    }
    decide(lastFocusMessage, inputValue, buttonSendMessage, lastFocusName, ownerList);

    function random(messageTxt, input, send, from, owner) {
        //7
        for (let adm = 0; adm < owner.length; adm++) {
            for (let prefixid = 0; prefixid < prefix.length; prefixid++) {
                if (messageTxt === `${prefix[prefixid]} рандом` && lastFocusName === owner[adm]) {
                    setTimeout(function() {
                        input.innerHTML = `Рандомное число... ${randomNum}`
                        send.click();
                    }, 200)
                }
            }
        }
    }
    random(lastFocusMessage, inputValue, buttonSendMessage, lastFocusName, ownerList);
    
    function id(messageTxt, input, send, from, owner) {
        //7
        for (let adm = 0; adm < owner.length; adm++) {
            for (let idCount = 0; idCount < idCommands.length; idCount++) {
                for (let prefixid = 0; prefixid < prefix.length; prefixid++) {
                    if (messageTxt === `${prefix[prefixid]} ${idCommands[idCount]}` && lastFocusName === owner[adm]) {
                        setTimeout(function() {
                            input.innerHTML = `Ваш цифровой id: ${vk.id}`
                            send.click();
                        }, 200)
                    }
                }
            }
        }
    }
    id(lastFocusMessage, inputValue, buttonSendMessage, lastFocusName, ownerList);

    function js(messageTxt, input, send, from, owner) {
        //8
        for (let adm = 0; adm < owner.length; adm++) {
            for (let prefixid = 0; prefixid < prefix.length; prefixid++) {
                if (messageTxt.split(`${prefix[prefixid]} выполни `)[1] && !messageTxt.split(`${prefix[prefixid]} выполни `)[0] && lastFocusName == owner[adm]) {
                    setTimeout(function() {
                        eval(messageTxt.split(`${prefix[prefixid]} выполни `)[1]);
                        input.innerHTML = `Function: ${messageTxt.split(`${prefix[prefixid]} выполни `)[1]}`
                        send.click();
                    }, 200)
                }
            }
        }
    }
    js(lastFocusMessage, inputValue, buttonSendMessage, lastFocusName, ownerList);

    function ownerSource(messageTxt, input, send, from, owner, info) {
        //9
        for (let adm = 0; adm < owner.length; adm++) {
            for (let prefixid = 0; prefixid < prefix.length; prefixid++) {
                if (messageTxt === `${prefix[prefixid]} админы` && lastFocusName === owner[adm]) {
                    setTimeout(function() {
                        if (owneristID[0] === undefined) {
                            owneristID.push("Никто пока-что не назначен.");
                        }
                        if (ownerListID[0] === undefined) {
                            ownerListID.push("Никто пока-что не назначен.");
                        }
                        if (moderListID[0] === undefined) {
                            moderListID.push("Никто пока-что не назначен.");
                        }
                        if (helperListID[0] === undefined) {
                            helperListID.push("Никто пока-что не назначен.");
                        }
                        input.innerHTML = `• Список Разработчиков:<br> ${owneristID}<br><br>
                                       • Список Администраторов:<br> ${ownerListID}<br><br>
                                       • Список Модераторов:<br> ${moderListID}<br><br>
                                       • Список Помощников:<br> ${helperListID}`;
                        send.click();
                    }, 200)
                }
            }
        }
    }
    ownerSource(lastFocusMessage, inputValue, buttonSendMessage, lastFocusName, ownerList, userInformation);

    function data(messageTxt, input, send, from, owner, info) {
        //10
        for (let adm = 0; adm < owner.length; adm++) {
            for (let prefixid = 0; prefixid < prefix.length; prefixid++) {
                if (messageTxt === `${prefix[prefixid]} дата` && lastFocusName === owner[adm]) {
                    setTimeout(function() {
                        input.innerHTML = `Сегодня, ${getWeekDay(date)}<br>Время: ${dateTime}<br>Дата: ${getWeekMonth(date)}, ${dateFull}`
                        send.click();
                    }, 200)
                }
            }
        }
    }
    data(lastFocusMessage, inputValue, buttonSendMessage, lastFocusName, ownerList);

    function dialogName(messageTxt, input, send, from, owner, info) {
        //10
        for (let adm = 0; adm < owner.length; adm++) {
            let onOrOff = document.querySelector("span[class='im-page--title-meta _im_page_peer_online']").innerText;
            let chatOrDialog = "📋 В чате с: "
            let idChatName = "🀄 ID Чата: "
            if (onOrOff.indexOf("участника") > -1 || onOrOff.indexOf("участников") > -1) {
                chatOrDialog = "📋 В чате: "
                idChatName = "🀄 ID Чата: "
            } else {
                chatOrDialog = "📋 В диалоге с: "
                idChatName = "🀄 ID Собеседника: "
            }
            for (let prefixid = 0; prefixid < prefix.length; prefixid++) {
                if (messageTxt === `${prefix[prefixid]} чат` && lastFocusName === owner[adm]) {
                    setTimeout(function() {
                        input.innerHTML = `${chatOrDialog} ${chatName}<br>
                                       ${idChatName} ${ulItemChatid[0].getAttribute("data-list-id")}`
                        send.click();
                    }, 200)
                }
            }
        }
    }
    dialogName(lastFocusMessage, inputValue, buttonSendMessage, lastFocusName, ownerList);

    function profile(messageTxt, input, send, from, owner) {
        //11
        for (let adm = 0; adm < owner.length; adm++) {
            for (let prefixid = 0; prefixid < prefix.length; prefixid++) {
                if (messageTxt === `${prefix[prefixid]} профиль` && lastFocusName === owner[adm]) {
                    setTimeout(function() {
                        input.innerHTML = `Профиль: ${profileInfo.name}<br>
                                       Откртых диалогов: ${profileInfo.openDialog}<br>
                                       Последний открытый диалог: «${profileInfo.openDialogLast}»<br>
                                       Первый открытый диалог: «${profileInfo.openDialogFirst}»<br>
                                       Наличие Баг-трекера: ${profileInfo.bugTracker}<br>
                                       ${profileInfo.playNow} «${profileInfo.audio}»<br>
                                       Непрочитанных диалогов: ${profileInfo.messageCount}`
                        send.click();
                    }, 200);
                }
            }
        }
    }
    profile(lastFocusMessage, inputValue, buttonSendMessage, lastFocusName, ownerList);

}, 500);
let clearCount = 1;
// +1
let timeout = 2;
let clear = setInterval(function() {
    console.log(`[${clearCount}] Cleaning the console - Running [Timeout ${timeout}s]`);
    clearCount++;
}, `${timeout}000`);

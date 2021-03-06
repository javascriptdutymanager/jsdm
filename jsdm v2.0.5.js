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
// Внешнее время запуска
let dateFocusDate = "Сегодня";
// Внешняя дата запуска
let main = 1;
let startBotV2 = setInterval(function() {
    let modth = document.querySelector("div[class='top_profile_name']");
    function getWeekDay(date) {
        let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        return days[date.getDay()];
    }

    function getWeekMonth(date) {
        let month = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
        return month[date.getMonth()];
    }
    let fullName = document.querySelector("img[class='top_profile_vkconnect_img']").getAttribute("alt");
    let userName = document.querySelector(".top_profile_name").innerText;
    let userLink = document.querySelector("a[class='left_row']").getAttribute("href").slice(1);
    let owneristID = [`@${userLink}(${fullName}).`];
    // Можно и без "@" и "()"
    // id owner
    let ownerListID = [];
    // id owner
    let moderListID = [];
    // id moder
    let helperListID = [];
    // id helper
    let autoPushName = [];
    autoPushName.push(`${fullName} `);
    let ownerList = [`${autoPushName}`, `${modth}`];
    // После Имени и Фамилии добавьте пробел. Пример: let ownerList = [`${autoPushName}`, `${modth}`, "Имя Фамилия ", "Имя"];
    let adminList = [];
    // Администраторы
    let moderList = [];
    // Модераторы
    let helperList = [];
    // Помощники
    let prefix = [".к", "!к", ".л", "!л"];
    let idCommands = [`id`, `ид`, `айди`];
    let downLoadBot = ["гит", "бот"];
    let commandsBind = ["кмд", "команды"];
    let commandsListAll = [" • «шабы»", " • «шабы все»", " • «тех»", " • «инфо»", " • «пинг»", " • «деж»", " • «напиши»", ` • «${commandsBind.join("/")}»`, " • «реши»", ` • «${downLoadBot.join("/")}»`, " • «рандом»", ` • «${idCommands.join("/")}»`, " • «выполни»", " • «админы»", " • «дата»", " • «префиксы»", " • «чат»", " • «профиль»"];
    let status = ["Пользователь"];
    let randomNum = Math.round(Math.random() * 541351);
    let date = new Date();
    let dateTime = new Date().toLocaleTimeString();
    let dateFull = new Date().toLocaleDateString();
    let openCase = document.querySelectorAll("span[class='im-right-menu--text _im_r_tx']");
    let audio = document.querySelector("div[class='top_audio_player_title_wrap']");
    let allTagInWeb = document.querySelectorAll("*").length;
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
    let editMessage = document.querySelectorAll("span[class='im-mess--edit _im_mess_edit']");
    let LastEditMessage = editMessage[editMessage.length - 1];
    let editThisMsg = document.querySelector("button[aria-label='Редактировать']");
    let editinput = document.querySelector("div[class='im_editable im-chat-input--text _im_text']");
    let cancel = document.querySelector("button[class='im-audio-message--cancel-btn']");
    let secondsFouc = 1;
    let mSecondsFouc = 1;
    let tempCountList = 1;
    let tempCountIndex = 0;
    let mainListOut = 1;
    let playNow = "";
    let playOrStart = document.querySelector("div[class='blind_label _top_audio_player_play_blind_label']");
    let allBoxHide = document.querySelectorAll("div[class='box_x_button']");
    let replyMessage = document.querySelectorAll("div[class='im-mess--text wall_module _im_log_body']");
    let replyMessageIndex = replyMessage[replyMessage.length - 1].innerText;
    let templatesList;
    let tempPush = [];
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
        audio: `${audio.innerText}`,
        messageCount: `${vk.counts.msg}`,
        playNow: `${playNow}`
    }
    const userInformation = {
        borowser: `${browser.version}`,
        userInfo: `${status[0]}: @${userLink}(${userName}).`,
        onwer: `${owneristID.length}.`,
        admin: `${ownerListID.length}.`,
        moder: `${moderListID.length}.`,
        helper: `${helperListID.length}.`,
        command: `17`
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
    for (let prefLength = 0; prefLength < prefix.length; prefLength++) {}

    function temp(messageTxt, inputEdit, from, owner) {
        //1
        for (let adm = 0; adm < owner.length; adm++) {
            for (let prefLength = 0; prefLength < prefix.length; prefLength++) {
                templatesList = [{
                    name: `${prefix[prefLength]} шаб тест1`,
                    answer: "Тестовый шаблон 1!"
                },{
                    name: `${prefix[prefLength]} шаб тест2`,
                    answer: "Тестовый шаблон 2!"
                },{
                    name: `${prefix[prefLength]} шаб тест3`,
                    answer: "Тестовый шаблон 3!"
                }]
                for (let prefixid = 0; prefixid < prefix.length; prefixid++) {
                    for (let main = 0; main < templatesList.length; main++) {
                        if (messageTxt === templatesList[main].name && lastFocusName === owner[adm] || replyMessageIndex.indexOf(templatesList[main].name) > -1 && lastFocusName === owner[adm]) {
                            LastEditMessage.click();
                            inputEdit.innerHTML = templatesList[main].answer;
                            editThisMsg.click();
                            editThisMsg = "";
                            setTimeout(function() {
                                inputEdit.innerHTML = "";
                            }, 200)
                            for (let immessage = 0; immessage < allBoxHide.length; immessage++) {
                                allBoxHide[immessage].click();
                            }
                            for (let immessage = 0; immessage < allBoxHide.length; immessage++) {
                                allBoxHide[immessage].click();
                            }
                        }
                    }
                }
            }
        }
    }
    temp(lastFocusMessage, editinput, lastFocusName, ownerList);

    function tempList(messageTxt, input, send, from, owner, info) {
        //12
        for (let adm = 0; adm < owner.length; adm++) {
            for (let prefixid = 0; prefixid < prefix.length; prefixid++) {
                if (messageTxt === `${prefix[prefixid]} шабы` && lastFocusName === owner[adm]) {
                    setTimeout(function() {
                        for (let tempCount = 0; tempCount < 10; tempCount++) {
                            if (templatesList.length === 0) {
                                templatesList[0] = {
                                    name: null,
                                    answer: " 📝 Ваши шаблоны: <br> Шаблонов нету."
                                };
                                input.innerHTML = `${templatesList[0].answer}<br>`
                                send.click();
                            }
                        }
                        for (let tpCount = 0; tpCount < templatesList.length; tpCount++) {
                            tempPush.push(` • «${templatesList[tpCount].name.slice(7)}»<br>`);
                            console.log(tempPush);
                            if (tempPush.length >= 10) {
                                input.innerHTML = ` 📝 Ваши последние 10/${templatesList.length} шаблонов: <br>
                                                   • «${templatesList[0].name.slice(7)}»<br>
                                                   • «${templatesList[1].name.slice(7)}»<br>
                                                   • «${templatesList[2].name.slice(7)}»<br>
                                                   • «${templatesList[3].name.slice(7)}»<br>
                                                   • «${templatesList[4].name.slice(7)}»<br>
                                                   • «${templatesList[5].name.slice(7)}»<br>
                                                   • «${templatesList[6].name.slice(7)}»<br>
                                                   • «${templatesList[7].name.slice(7)}»<br>
                                                   • «${templatesList[8].name.slice(7)}»<br>
                                                   • «${templatesList[9].name.slice(7)}»<br><br>
                                                   Если шаблонов меньше 10, то вы увидете полный список.`
                                send.click();
                            } else {
                                input.innerHTML = ` 📝 Ваши все шаблоны: <br>
                                                   ${tempPush.join(" ")}<br><br>
                                                   Если шаблонов больше 10, то вы увидете короткий список.`
                                send.click();
                            }
                        }
                    }, 200)
                }
            }
        }
    }
    tempList(lastFocusMessage, inputValue, buttonSendMessage, lastFocusName, ownerList);

    function tempListAll(messageTxt, input, send, from, owner, info) {
        //12
        for (let adm = 0; adm < owner.length; adm++) {
            for (let prefixid = 0; prefixid < prefix.length; prefixid++) {
                if (messageTxt === `${prefix[prefixid]} шабы все` && lastFocusName === owner[adm]) {
                    setTimeout(function() {
                        for (let tempCount = 0; tempCount < 10; tempCount++) {
                            if (templatesList.length === 0) {
                                templatesList[0] = {
                                    name: null,
                                    answer: " 📝 Ваши шаблоны: <br> Шаблонов нету."
                                };
                                input.innerHTML = `${templatesList[0].answer}<br>`
                                send.click();
                            }
                        }
                        for (let tpCount = 0; tpCount < templatesList.length; tpCount++) {
                            tempPush.push(` • «${templatesList[tpCount].name.slice(7)}»<br>`);
                            console.log(tempPush);
                            input.innerHTML = ` 📝 Ваши все шаблоны: <br>
                                                   ${tempPush.join(" ")}`
                            send.click();
                        }
                    }, 200)
                }
            }
        }
    }
    tempListAll(lastFocusMessage, inputValue, buttonSendMessage, lastFocusName, ownerList);

    function TechInformation(messageTxt, input, send, from, owner) {
        //2
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
        //3
        for (let adm = 0; adm < owner.length; adm++) {
            for (let prefixid = 0; prefixid < prefix.length; prefixid++) {
                if (messageTxt === `${prefix[prefixid]} инфо` && lastFocusName === owner[adm]) {
                    setTimeout(function() {
                        if (new Date().toLocaleTimeString() === "00:00:00")
                            dateFocusDate = "Вчера"
                        setTimeout(function() {
                            dateFocusDate = "Вчера";
                        }, 86400000);
                        setTimeout(function() {
                            dateFocusDate = "Позавчера";
                        }, 172800000);
                        setTimeout(function() {
                            dateFocusDate = new Date().toLocaleDateString();
                        }, 259200000);
                        input.innerHTML = `Информация JSDM 2.4<br>
                                       ${info.userInfo}<br>
                                       Бот был запущен: ${dateFocusDate} в ${dateFocusTime}<br>
                                       Запущен на: Google Chrome version[${info.borowser}]<br>
                                       Рабочих команд: ${info.command}<br>
                                       Последнее обновление: 10/09/2020 в 17:45 (МСК)<br><br>
                                       Владельцев: ${info.onwer}<br>
                                       Администраторов: ${info.admin}<br>
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
        //5
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
                        input.innerHTML = `ПОНГ TP<br>Ответ через: ${secondsFouc}.${mSecondsFouc}с.<br>Ответ без прин. задержки: 0.1с.`;
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
        //5
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
                        input.innerHTML = `✅ На месте! 2.0<br>Ответ через: ${secondsFouc}.${mSecondsFouc}с.<br>Ответ без прин. задержки: 0.1с.`;
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
        //6
        for (let adm = 0; adm < owner.length; adm++) {
            for (let prefixid = 0; prefixid < prefix.length; prefixid++) {
                if (messageTxt.split(`${prefix[prefixid]} напиши<br>`)[1] && !messageTxt.split(`${prefix[prefixid]} напиши<br>`)[0] && lastFocusName == owner[adm]) {
                    setTimeout(function() {
                        input.innerHTML = messageTxt.split(`${prefix[prefixid]} напиши<br>`)[1];
                        send.click();
                    }, 200)

                }
            }
        }
    }
    say(lastFocusMessageHtml, inputValue, buttonSendMessage, lastFocusName, ownerList);

    function commandsList(messageTxt, input, send, from, owner) {
        //9
        for (let adm = 0; adm < owner.length; adm++) {
            for (let prefixid = 0; prefixid < prefix.length; prefixid++) {
                for (let cmdBind = 0; cmdBind < commandsBind.length; cmdBind++) {
                    if (messageTxt === `${prefix[prefixid]} ${commandsBind[cmdBind]}` && lastFocusName === owner[adm]) {
                        setTimeout(function() {
                            input.innerHTML = ` 📋 Список всех (${commandsListAll.length}) сигналов:<br><br>
                                               ${commandsListAll.join("<br>")}`
                            send.click();
                        }, 200)
                    }
                }
            }
        }
    }
    commandsList(lastFocusMessage, inputValue, buttonSendMessage, lastFocusName, ownerList);

    function decide(messageTxt, input, send, from, owner) {
        //7
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

    function git(messageTxt, inputEdit, from, owner) {
        //8
        for (let adm = 0; adm < owner.length; adm++) {
            for (let gitCount = 0; gitCount < downLoadBot.length; gitCount++) {
                for (let prefixid = 0; prefixid < prefix.length; prefixid++) {
                    if (messageTxt === `${prefix[prefixid]} ${downLoadBot[gitCount]}` && lastFocusName === owner[adm]) {
                        setTimeout(function() {
                            LastEditMessage.click();
                        }, 125)
                        setTimeout(function() {
                            inputEdit.innerHTML = `✅ Скачать данного бота можно по ссылке:<br> 
                                               https://github.com/javascriptdutymanager/jsdm`
                            editThisMsg.click();
                        }, 150);
                        setTimeout(function() {
                            inputEdit.innerHTML = "";
                        }, 151)
                    }
                }
            }
        }
    }
    git(lastFocusMessage, editinput, lastFocusName, ownerList);

    function random(messageTxt, input, send, from, owner) {
        //9
        for (let adm = 0; adm < owner.length; adm++) {
            for (let prefixid = 0; prefixid < prefix.length; prefixid++) {
                if (messageTxt === `${prefix[prefixid]} рандом` && lastFocusName === owner[adm]) {
                    setTimeout(function() {
                        input.innerHTML = ` 🎲 Рандомное число: ${randomNum}`
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
        //10
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
        //11
        for (let adm = 0; adm < owner.length; adm++) {
            for (let prefixid = 0; prefixid < prefix.length; prefixid++) {
                if (messageTxt === `${prefix[prefixid]} админы` && lastFocusName === owner[adm]) {
                    setTimeout(function() {
                        if (owneristID[0] === undefined) {
                            owneristID.push("Никто пока-что не назначен.");
                        }
                        if (adminList[0] === undefined) {
                            adminList.push("Никто пока-что не назначен.");
                        }
                        if (moderListID[0] === undefined) {
                            moderListID.push("Никто пока-что не назначен.");
                        }
                        if (helperListID[0] === undefined) {
                            helperListID.push("Никто пока-что не назначен.");
                        }
                        input.innerHTML = `• Список Владельцев:<br> ${owneristID}<br><br>
                                       • Список Администраторов:<br> ${adminList}<br><br>
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
        //12
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

    function prefixList(messageTxt, input, send, from, owner, info) {
        //13
        for (let adm = 0; adm < owner.length; adm++) {
            for (let prefixid = 0; prefixid < prefix.length; prefixid++) {
                if (messageTxt === `${prefix[prefixid]} префиксы` && lastFocusName === owner[adm]) {
                    setTimeout(function() {
                        input.innerHTML = `📃 Список ваших префиксов: <br> ${prefix.join(" ")}<br>
                                            Основной, и первоначальный префикс: «.к»`
                        send.click();
                    }, 200)
                }
            }
        }
    }
    prefixList(lastFocusMessage, inputValue, buttonSendMessage, lastFocusName, ownerList);

    function dialogName(messageTxt, input, send, from, owner, info) {
        //14
        for (let adm = 0; adm < owner.length; adm++) {
            let onOrOff = document.querySelector("span[class='im-page--title-meta _im_page_peer_online']").innerText;
            let chatOrDialog = "📋 В чате с: "
            let idChatName = "💬 ID Чата: "
            if (onOrOff.indexOf("участника") > -1 || onOrOff.indexOf("участников") > -1) {
                chatOrDialog = "📋 В чате: "
                idChatName = "💬 ID Чата: "
            } else {
                chatOrDialog = "👤 В диалоге с: "
                idChatName = "💬 ID Собеседника: "
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
        //15
        for (let adm = 0; adm < owner.length; adm++) {
            for (let prefixid = 0; prefixid < prefix.length; prefixid++) {
                if (messageTxt === `${prefix[prefixid]} профиль` && lastFocusName === owner[adm]) {
                    setTimeout(function() {
                        input.innerHTML = `Профиль: ${profileInfo.name}<br>
                                       Откртых диалогов: ${profileInfo.openDialog}<br>
                                       Последний открытый диалог: «${profileInfo.openDialogLast}»<br>
                                       Первый открытый диалог: «${profileInfo.openDialogFirst}»<br>
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

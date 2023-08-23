            (function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function () {
                            (i[r].q = i[r].q || []).push(arguments)
                        }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                        m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

            ga('create', 'UA-27522412-1', 'auto');
            ga('send', 'pageview');


            $(document)['ready'](function () {
                var _0xf8c2x1 =
                // '<tr><td>[\u0645\u0640\u0627\u062F\u0629 {1} ] : &nbsp;&nbsp;&nbsp; <input type="text" class="subjectName" /></td><td><input type="text" class="subjectDegree" /></td><td><input type="text" class="subjectHour" /></td><td><select class="subjectRating"><option value="">\u063A\u064A\u0631 \u0645\u062D\u062F\u062F</option><option value="A+">A+</option><option value="A">A</option><option value="B+">B+</option><option value="B">B</option><option value="C+">C+</option><option value="C">C</option><option value="D+">D+</option><option value="D">D</option><option value="F">F</option></select></td><td><label class="subjectPoint"></label></td><td><input type="checkbox" checked="checked" onclick="chek(this)" /></td></tr>';
                // <input type="text" name="name" class="subjectName form-control"/> مكان الاسم في الجدول 
                '<tr><td><div class="form-group"><label for="Student"  class="col-sm-6 control-label">[مـادة {1} ] :</label><div class="col-sm-6"></div></div></td><td><input type="text" class="subjectDegree form-control"/></td><td><input type="text" class="subjectHour form-control"/></td><td><select class="subjectRating form-control"><option value="">غير محدد</option><option value="A+">A+</option><option value="A">A</option><option value="B+">B+</option><option value="B">B</option><option value="C+">C+</option><option value="C">C</option><option value="D">D</option><option value="F">F</option></select></td><td><label class="subjectPoint"></label></td><td><input type="checkbox" checked="checked" onclick="chek(this)" class=""/></td></tr>';
                $('.AddMore a')['click'](function (_0xf8c2x2) {
                    _0xf8c2x2['preventDefault']();
                    var _0xf8c2x3 = $('#tabl > tbody > tr')['length'] + 1;
                    var _0xf8c2x4 = _0xf8c2x3 % 2;
                    _0xf8c2x4 = _0xf8c2x4 == 1 ? 1 : 2;
                    _0xf8c2x3 = _0xf8c2x3 < 10 ? '0' + _0xf8c2x3 : _0xf8c2x3;
                    var _0xf8c2x5 = _0xf8c2x1['replace']('{1}', _0xf8c2x3)['replace']('{0}', _0xf8c2x4);
                    $('#tabl > tbody')['append'](_0xf8c2x5);
                });
                $('body')['delegate']('.subjectDegree,.subjectHour,#prvDegree,#prvCHour,#prvPoint', 'keypress', function (_0xf8c2x2) {
                    var _0xf8c2x6 = _0xf8c2x2['charCode'] ? _0xf8c2x2['charCode'] : _0xf8c2x2['keyCode'] ? _0xf8c2x2['keyCode'] : 0;
                    if ((_0xf8c2x6 >= 48 && _0xf8c2x6 <= 57) || _0xf8c2x6 == 46 || _0xf8c2x2['keyCode'] == 9 || _0xf8c2x6 == 13 || _0xf8c2x6 == 27 || _0xf8c2x6 == 8 || _0xf8c2x6 == 46 || _0xf8c2x6 == 37 || _0xf8c2x6 == 38 || _0xf8c2x6 == 39 || _0xf8c2x2['keyCode'] == 40 || _0xf8c2x6 == 33 || _0xf8c2x6 == 34 || _0xf8c2x6 == 46 || _0xf8c2x6 == 35 || _0xf8c2x6 == 36) {
                        return true;
                    }
                    ;
                    return false;
                });
                $('body')['delegate']('.subjectDegree,.subjectHour,#prvDegree,#prvCHour,#prvPoint', 'keyup', function (_0xf8c2x2) {
                    var _0xf8c2x6 = _0xf8c2x2['charCode'] ? _0xf8c2x2['charCode'] : _0xf8c2x2['keyCode'] ? _0xf8c2x2['keyCode'] : 0;
                    var _0xf8c2x7 = 0;
                    _0xf8c2x7 = _0xf8c2x6 == 38 ? 1 : _0xf8c2x7;
                    _0xf8c2x7 = _0xf8c2x6 == 40 ? -1 : _0xf8c2x7;
                    var _0xf8c2x8 = $(this)['val']();
                    if (_0xf8c2x8 == undefined || _0xf8c2x8 == '') {
                        _0xf8c2x8 = 0;
                    }
                    ;
                    _0xf8c2x8 = parseFloat(_0xf8c2x8);
                    if ((_0xf8c2x6 == 38 || _0xf8c2x6 == 40) && _0xf8c2x8 + _0xf8c2x7 >= 0) {
                        $(this)['val'](_0xf8c2x8 + _0xf8c2x7);
                    }
                    ;
                    recalc();
                });
                $('#gpaSystem5,#gpaSystem4,#rdRate,#rdPoint')['click'](recalc);
                $('body')['delegate']('.subjectRating', 'change', function () {
                    var _0xf8c2x9 = $(this)['parentsUntil']('tr')['parent']();
                    var _0xf8c2xa = $(this)['val']();
                    _0xf8c2x9['find']('.subjectDegree')['val'](getDegree(_0xf8c2xa));
                    recalc();
                });
                $('body')['delegate']('#tabl tr', 'click', function (_0xf8c2x2) {
                    if (_0xf8c2x2['target']['nodeName'] != 'INPUT' && _0xf8c2x2['target']['nodeName'] != 'SELECT' && _0xf8c2x2['target']['nodeName'] != 'OPTION') {
                        $(this)['find']('input[type=checkbox]')['click']();
                    }
                    ;
                });
                $('body')['delegate']('.rtpoint', 'click', function (_0xf8c2x2) {
                    if (_0xf8c2x2['target']['nodeName'] != 'INPUT') {
                        $(this)['find']('input[type=radio]')['click']();
                        $('.rtpoint')['css']('opacity', '0.3');
                        $('.rtpoint')['css']('background', '#ccc');
                        $(this)['css']('opacity', '');
                        $(this)['css']('background', '');
                    }
                    ;
                });
                $('body')['delegate']('.rtpoint input', 'click', function (_0xf8c2x2) {
                    var _0xf8c2x9 = $(this)['parentsUntil']('tr')['parent']();
                    if ($(this)['is']('input[type=radio]')) {
                        var _0xf8c2xb = 0;
                    } else {
                        $(_0xf8c2x9)['find']('input[type=radio]')['click']();
                    }
                    ;
                    $('.rtpoint')['css']('opacity', '0.3');
                    $('.rtpoint')['css']('background', '#ccc');
                    $(_0xf8c2x9)['css']('opacity', '');
                    $(_0xf8c2x9)['css']('background', '');
                });
            });

            function recalc() {
                var _0xf8c2xd = $('input:radio[name=gpaSystem]:checked')['val']();
                var _0xf8c2xe = 0;
                var _0xf8c2xf = 0;
                $('#tabl tr')['filter'](function () {
                    return $(this)['find']('input[type=checkbox]')['is'](':checked');
                })['each'](function () {
                    var _0xf8c2x10 = $(this)['find']('.subjectDegree')['val']();
                    if (_0xf8c2x10 == undefined || _0xf8c2x10 == '') {
                        $(this)['find']('.subjectRating')['val']('');
                        $(this)['find']('.subjectPoint')['text']('');
                        return;
                    }
                    ;
                    degree = parseFloat(_0xf8c2x10);
                    var _0xf8c2x11 = getRate(degree);
                    $(this)['find']('.subjectRating')['val'](_0xf8c2x11);
                    var _0xf8c2x12 = $(this)['find']('.subjectHour')['val']();
                    if (_0xf8c2x12 == undefined || _0xf8c2x12 == '') {
                        $(this)['find']('.subjectPoint')['text']('');
                        return;
                    }
                    ;
                    var _0xf8c2x13 = parseFloat(_0xf8c2x12);
                    var _0xf8c2x14 = getSinglePoints(degree);
                    var _0xf8c2x15 = getPoints(_0xf8c2x14, _0xf8c2x13, _0xf8c2xd);
                    $(this)['find']('.subjectPoint')['text'](_0xf8c2x15);
                    _0xf8c2xf += _0xf8c2x13;
                    _0xf8c2xe += _0xf8c2x15;
                });
                $('#totalTermPoint')['text'](roundNumber(_0xf8c2xe, 3));
                $('#totalTermHour')['text'](roundNumber(_0xf8c2xf, 3));
                if (_0xf8c2xf > 0) {
                    $('#totalTermRate')['text'](roundNumber(_0xf8c2xe / _0xf8c2xf, 3));
                    $('#totalTermVal')['text'](getTotalVal(_0xf8c2xe / _0xf8c2xf));
                } else {
                    $('#totalTermRate')['text']('0');
                    $('#totalTermVal')['text']('');
                }
                ;
                var _0xf8c2x16 = 0;
                var _0xf8c2x17 = 0;
                var _0xf8c2x18 = 0;
                var _0xf8c2x19 = $('#prvCHour')['val']();
                if (_0xf8c2x19 != undefined && _0xf8c2x19 != '') {
                    _0xf8c2x17 = parseFloat(_0xf8c2x19);
                }
                ;
                var _0xf8c2x1a = $('input:radio[name=ratePoints]:checked')['val']();
                if (_0xf8c2x1a == 'rate') {
                    var _0xf8c2x1b = $('#prvDegree')['val']();
                    if (_0xf8c2x1b != undefined && _0xf8c2x1b != '') {
                        _0xf8c2x16 = parseFloat(_0xf8c2x1b);
                    }
                    ;
                    _0xf8c2x18 = _0xf8c2x16 * _0xf8c2x17;
                    $('#prvPoint')['val'](roundNumber(_0xf8c2x18, 3));
                } else {
                    var _0xf8c2x1c = $('#prvPoint')['val']();
                    if (_0xf8c2x1c != undefined && _0xf8c2x1c != '') {
                        _0xf8c2x18 = parseFloat(_0xf8c2x1c);
                    }
                    ;
                    if (_0xf8c2x17 == 0) {
                        _0xf8c2x16 = 0;
                    } else {
                        _0xf8c2x16 = _0xf8c2x18 / _0xf8c2x17;
                    }
                    ;
                    $('#prvDegree')['val'](roundNumber(_0xf8c2x16, 3));
                }
                ;
                var _0xf8c2x1b = $('#prvDegree')['val']();
                if (_0xf8c2x1b != undefined && _0xf8c2x1b != '') {
                    _0xf8c2x16 = parseFloat(_0xf8c2x1b);
                }
                ;
                var _0xf8c2x18 = _0xf8c2x1b * _0xf8c2x17;
                $('#totalPoint')['text'](roundNumber(_0xf8c2xe + _0xf8c2x18, 3));
                $('#totalHour')['text'](roundNumber(_0xf8c2xf + _0xf8c2x17, 3));
                if ((_0xf8c2xf + _0xf8c2x17) > 0) {
                    $('#totalRate')['text'](roundNumber((_0xf8c2xe + _0xf8c2x18) / (_0xf8c2xf + _0xf8c2x17), 3));
                    $('#totalVal')['text'](getTotalVal((_0xf8c2xe + _0xf8c2x18) / (_0xf8c2xf + _0xf8c2x17)));
                } else {
                    $('#totalRate')['text']('0');
                    $('#totalVal')['text']('');
                }
                ;

                var totalTermdoneHour = 0; // تهيئة متغير لحساب الساعات المجتازة

                $('#tabl tr').filter(function () {
                    return $(this).find('input[type=checkbox]').is(':checked');
                }).each(function () {
                    var subjectHour = parseFloat($(this).find('.subjectHour').val());
                    var subjectDegree = parseFloat($(this).find('.subjectDegree').val()); // Get degree value
                
                    if (!isNaN(subjectHour) && !isNaN(subjectDegree) && subjectDegree >= 60) {
                        totalTermdoneHour += subjectHour;
                    }
                });
                
                $('#totalTermdoneHour').text(roundNumber(totalTermdoneHour, 3));
                
                
                var totaldoneHour = 0; // تهيئة متغير لحساب الساعات المجتازة
                
                // حساب الساعات المجتازة من خلال عناصر الجدول
                $('#tabl tr').filter(function () {
                    return $(this).find('input[type=checkbox]').is(':checked');
                }).each(function () {
                    var doneHour = parseFloat($(this).find('.subjectHour').val());
                    var subjectDegree = parseFloat($(this).find('.subjectDegree').val()); // Get degree value
                
                    if (!isNaN(doneHour) && !isNaN(subjectDegree) && subjectDegree >= 60) {
                        totaldoneHour += doneHour;
                    }
                });
                
                // وضع القيمة المحسوبة داخل العنصر <label id="totaldoneHour">
                $('#totaldoneHour').text(roundNumber(totaldoneHour, 3));
                
                
            }
            ;


            function roundNumber(_0xf8c2x1e, _0xf8c2x1f) {
                var _0xf8c2x20 = new Number(_0xf8c2x1e + '')['toFixed'](parseInt(_0xf8c2x1f));
                return parseFloat(_0xf8c2x20);
            }
            ;

            function getPoints(_0xf8c2x22, _0xf8c2x23, _0xf8c2x24) {
                return (parseFloat(_0xf8c2x22) + parseFloat(_0xf8c2x24)) * parseFloat(_0xf8c2x23);
            }
            ;

            function getSinglePoints(_0xf8c2x26) {
                if (_0xf8c2x26 >= 90) {
                    return 4.00;
                } else {
                    if (_0xf8c2x26 >= 85) {
                        return 3.667;
                    } else {
                        if (_0xf8c2x26 >= 80) {
                            return 3.333;
                        } else {
                            if (_0xf8c2x26 >= 75) {
                                return 3.000;
                            } else {
                                if (_0xf8c2x26 >= 70) {
                                    return 2.667;
                                } else {
                                    if (_0xf8c2x26 >= 65) {
                                        return 2.333;
                                    } else {
                                        if (_0xf8c2x26 >= 60) {
                                            return 2.000;
                                        } else {
                                            if (_0xf8c2x26 >= 0) {
                                                return 0;
                                            } else {
                                                return 0;
                                            }
                                            ;
                                        }
                                        ;
                                    }
                                    ;
                                }
                                ;
                            }
                            ;
                        }
                        ;
                    }
                    ;
                }
                ;
            }
            ;

            function getRate(_0xf8c2x26) {
                if (_0xf8c2x26 >= 90) {
                    return 'A+';
                } else {
                    if (_0xf8c2x26 >= 85) {
                        return 'A';
                    } else {
                        if (_0xf8c2x26 >= 80) {
                            return 'B+';
                        } else {
                            if (_0xf8c2x26 >= 75) {
                                return 'B';
                            } else {
                                if (_0xf8c2x26 >= 70) {
                                    return 'C+';
                                } else {
                                    if (_0xf8c2x26 >= 65) {
                                        return 'C';
                                    } else {
                                        if (_0xf8c2x26 >= 60) {
                                            return 'D';
                                        } else {
                                            {
                                                return 'F';
                                            }
                                            ;
                                        }
                                        ;
                                    }
                                    ;
                                }
                                ;
                            }
                            ;
                        }
                        ;
                    }
                    ;
                }
                ;
            }
            ;

            // *******************************************************
                gpa5
            // *******************************************************
            function getDegree(_0xf8c2x11) {
                if (_0xf8c2x11 == 'A+') {
                    return '95';
                } else {
                    if (_0xf8c2x11 == 'A') {
                        return '90';
                    } else {
                        if (_0xf8c2x11 == 'A-') {
                            return '85';
                        } else {
                            if (_0xf8c2x11 == 'B+') {
                                return '83';
                            } else {
                                if (_0xf8c2x11 == 'B') {
                                    return '77';
                                } else {
                                    if (_0xf8c2x11 == 'B-') {
                                        return '75';
                                    } else {
                                            if (_0xf8c2x11 == 'C+') {
                                                return '73';
                                            } else {
                                                if (_0xf8c2x11 == 'C') {
                                                    return '67';
                                                } else {
                                                    if (_0xf8c2x11 == 'C-') {
                                                        return '65';
                                                    } else {
                                                        if (_0xf8c2x11 == 'D+') {
                                                            return '63';
                                                        } else {
                                                                if (_0xf8c2x11 == 'D') {
                                                                    return '60';
                                                                } else {
                                                {
                                                    return 'F';
                                                }
                                                ;
                                            }
                                            ;
                                        }
                                        ;
                                    }
                                    ;
                                }
                                ;
                            }
                            ;
                        }
                        ;
                    }
                    ;
                };
            };
        };
    };
};

// End GPa 5 ******************

            function getTotalVal(_0xf8c2x26) {
                var _0xf8c2xd = $('input:radio[name=gpaSystem]:checked')['val']();
                _0xf8c2x26 = _0xf8c2x26 - parseFloat(_0xf8c2xd);
                if (_0xf8c2x26 >= 4.00) {
                    return '\u0645\u0645\u062A\u0627\u0632 \u0645\u0631\u062A\u0641\u0639';
                } else {
                    if (_0xf8c2x26 >= 3.667) {
                        return '\u0645\u0645\u062A\u0627\u0632';
                    } else {
                        if (_0xf8c2x26 >= 3.333) {
                            return '\u062C\u064A\u062F \u062C\u062F\u0627 \u0645\u0631\u062A\u0641\u0639';
                        } else {
                            if (_0xf8c2x26 >= 3.00) {
                                return '\u062C\u064A\u062F \u062C\u062F\u0627';
                            }else {
                                if (_0xf8c2x26 >= 2.667) {
                                    return '\u062C\u064A\u062F \u0645\u0631\u062A\u0641\u0639';
                                }else {
                                    if (_0xf8c2x26 >= 2.333) {
                                        return '\u062C\u064A\u062F';
                                    }else {
                                        if (_0xf8c2x26 >= 2.00) {
                                            return '\u0645\u0642\u0628\u0648\u0644';
                                        } else {
                                            return '\u0631\u0627\u0633\u0628';
                            }
                            ;
                        }
                        ;
                    }
                    ;
                }
                ;
            }
            ;
        };
    };
};

            function getRateWord(_0xf8c2x26) {
                if (_0xf8c2x26 >= 90) {
                    return '\u0645\u0645\u062A\u0627\u0632\u0645\u0631\u062A\u0641\u0639';
                } else {
                    if (_0xf8c2x26 >= 85) {
                        return '\u0645\u0645\u062A\u0627\u0632';
                    } else {
                        if (_0xf8c2x26 >= 80) {
                            return '\u062C\u064A\u062F \u062C\u062F\u0627\u0645\u0631\u062A\u0641\u0639';
                        } else {
                            if (_0xf8c2x26 >= 75) {
                                return '\u062C\u064A\u062F \u062C\u062F\u0627';
                            } else {
                                if (_0xf8c2x26 >= 70) {
                                    return '\u062C\u064A\u062F \u0645\u0631\u062A\u0641\u0639';
                                } else {
                                    if (_0xf8c2x26 >= 65) {
                                        return '\u062C\u064A\u062F';
                                    } else {
                                        if (_0xf8c2x26 >= 60) {
                                            return '\u0645\u0642\u0628\u0648\u0644';
                                        } else {
                                            if (_0xf8c2x26 >= 0) {
                                                return '\u0631\u0627\u0633\u0628';
                                            } else {
                                                return '';
                                            }
                                            ;
                                        }
                                        ;
                                    }
                                    ;
                                }
                                ;
                            }
                            ;
                        }
                        ;
                    }
                    ;
                }
                ;
            }
            ;

            function chek(_0xf8c2x2c) {
                if ($(_0xf8c2x2c)['is'](':checked')) {
                    var _0xf8c2x9 = $(_0xf8c2x2c)['parentsUntil']('tr')['parent']();
                    $(_0xf8c2x9)['find']('div.overflow')['remove']();
                    $(_0xf8c2x9)['css']('opacity', '');
                    $(_0xf8c2x9)['css']('background', '');
                } else {
                    var _0xf8c2x9 = $(_0xf8c2x2c)['parentsUntil']('tr')['parent']();
                    $(_0xf8c2x9)['css']('opacity', '0.3');
                    $(_0xf8c2x9)['css']('background', '#ccc');
                    $(_0xf8c2x9)['append']('<div class="overflow"></div>');
                }
                ;
                recalc();
            }
            ;


            // start popup
            function togglePopup(){
                document.getElementById("popup-1").classList.toggle("active");
            }
            //end popup


                
    document.addEventListener('DOMContentLoaded', function () {
        const intervalDuration = 120000; // الفترة الزمنية بالميليثانية (60 ثانية)  
        function showPrayerMessage() {
        alert('صلي على النبي');
        }
    
        // استدعاء الدالة كل فترة زمنية محددة
        setInterval(function () {
        showPrayerMessage();
        }, intervalDuration);
      });
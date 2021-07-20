$(document).ready(function () {
    //module fly-block
    !function() {

        // реализация плавающего блока
        // для работы разместить в теге блока data-fly-block
        // !!!!! пока что может быть только один fky-block на странице !!!!
        // !!!!! если их несколько берет первый !!!!
        // !!!!! как выяснилось больше одного не надо так что пока так =) !!!!

        if(window.innerWidth > 740 && document.querySelector('[data-fly-block]')) {
            var flyBlock = document.querySelector('[data-fly-block]');
            var flyBlockWrap;
            var flyBlockParent = flyBlock.parentElement;

            // верхний отступ от родителя для прилипания
            var paddingTop = 80;
            // нижний отступ от родителя для прилипания;
            var paddingBottom = 0;

            var flyBlockFunc = function() {
                if(flyBlockWrap == null) {
                    // создаем обертку и оборачиваем fly блок
                    // относительно него будут производиться расчеты
                    flyBlockWrap = document.createElement('div');
                    flyBlockParent.insertBefore(flyBlockWrap, flyBlock);
                    flyBlockWrap.appendChild(flyBlock);

                    // высоту обертке делаем исходя из высоты блока
                    flyBlockWrap.style.minHeight = flyBlock.getBoundingClientRect().height + 'px';
                    flyBlockWrap.style.marginTop = getComputedStyle(flyBlock).marginTop;
                    flyBlockWrap.style.marginBottom = getComputedStyle(flyBlock).marginBottom;
                }

                var flyBlockWrapTop = flyBlockWrap.getBoundingClientRect().top;
                var flyBlockParentTop = Math.round(flyBlockWrapTop + flyBlock.getBoundingClientRect().height - flyBlockParent.getBoundingClientRect().bottom);
                var flyBlockParentPaddingBottom = parseInt(getComputedStyle(flyBlockParent).paddingBottom);
                // берем верхний отступ что бы вычесть его из влияния
                var flyBlockMarginTop = parseInt(getComputedStyle(flyBlock).marginTop);

                if( flyBlockWrapTop - paddingTop <= 0 ) {
                    if (flyBlockWrapTop - flyBlockParentPaddingBottom - paddingBottom - paddingTop <= flyBlockParentTop) {
                        flyBlock.classList.add('stop-sticky');
                        flyBlock.classList.remove('sticky');
                        flyBlock.style.top = - flyBlockParentTop - flyBlockParentPaddingBottom - paddingBottom +'px';
                    } else {
                        flyBlock.classList.add('sticky');
                        flyBlock.classList.remove('stop-sticky');
                        flyBlock.style.top = paddingTop - flyBlockMarginTop + 'px';
                    }
                } else {
                    flyBlock.classList.remove('sticky');
                    flyBlock.classList.remove('stop-sticky');
                }

                // при скроле делаем элемент такого же размера как и родитель включая padding-и
                var flyBlockParentWidth = parseInt(getComputedStyle(flyBlockParent).width, 10) - (parseInt(getComputedStyle(flyBlockParent).paddingLeft, 10) + parseInt(getComputedStyle(flyBlockParent).paddingRight, 10));
                flyBlock.style.width = flyBlockParentWidth + 'px';

            };

            window.addEventListener('scroll', flyBlockFunc);
            window.addEventListener('resize', flyBlockFunc);

            window.addEventListener('resize', function() {
                // при ресайзе делаем элемент такого же размера как и родитель
                var flyBlockParentWidth = parseInt(getComputedStyle(flyBlockParent).width, 10) - (parseInt(getComputedStyle(flyBlockParent).paddingLeft, 10) + parseInt(getComputedStyle(flyBlockParent).paddingRight, 10));
                flyBlock.style.width = flyBlockParentWidth + 'px';

                // flyBlockWrap.style.height = flyBlock.getBoundingClientRect().height + 'px';
                // или
                if(typeof(flyBlockWrap) !== 'undefined')
                    flyBlockWrap.style.minHeight = getComputedStyle(flyBlock).height;

            });
        }
    }();
    //module fly-block //end
});
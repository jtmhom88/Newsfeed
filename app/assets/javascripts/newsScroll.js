$(function()
{
    $('#newsScroll').each(function()
    {
        var scroller = $(this);
        var list = scroller.children('ul');

        var listH = list.height();
        var scrollerH = scroller.height();
        list.css({
            marginTop: scrollerH,
            marginBottom: scrollerH
        });
        scroller.css({
            overflow: 'hidden'
        });

        var isOver = false;
        scroller.bind('mouseenter mouseleave', function(e) {
            isOver = (e.type == 'mouseenter');
        });

        var scroll = 0;
        setInterval(function()
        {
            if (isOver) return;
            scroll++;
            var newTop = scroll % (listH + scrollerH);
            scroller.scrollTop(newTop);
        }, 30);

    });
});
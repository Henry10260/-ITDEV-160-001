$(function() {
    var data = [
        {
            id: 1,
            title: 'Time',
            body: 'Time you enjoy wasting, was not wasted.',
            author: 'John Lennon'
        },
        {
            id: 2,
            title: 'Pain',
            body: 'If you are pained by any external thing, it is not this thing that disturbs you, but your own judgment about it.And it is in your power to wipe out this judgment now.',
            author: 'Marcus Aurelius'            
        },
        {
            id: 3,
            title: 'Words',
            body: 'Some people just have a way with words, and other people ... oh ... not have way.',
            author: 'Steve Martin'            
        },
        {
            id: 4,
            title: 'Peace',
            body: 'If everyone demanded peace instead of another television set, then thered be peace.',
            author: 'John Lennon'
        },
        {
            id: 5,
            title: 'Art',
            body: 'Art is the imposing of a pattern on experience, and our aesthetic enjoyment is recognition of the pattern.',
            author: 'Alfred North Whitehead'  
        }
    ];
    
    var $nav = $('#nav-container');
    var $intro = $('#intro');
    var $posts = $('#post-container');

    function initPosts() {
        for (let i = 0; i < data.length; i++){
            var postId = 'post-' + data[i].id,
            $post = $('<section class="post"></section>'),
            $title = $('<h2 class="title"></h2>'),
            $body = $('<blockquote></blockquote>'),
            $author = $('<span class="author"></span>'),
            $navItem = $('<li></li>');

            $title.text(data[i].title);
            $body.text(data[i].body);
            $author.text(data[i].author);

            $navItem.attr('id', data[i].id);
            $navItem.text(data[i].id);

            $post.attr('id', postId);
            $post.append($title);
            $post.append($body);
            $post.append($author);

            $post.append($post);
            $nav.append($navItem);

            $navItem.on('click', function() {
                var id = $(this).attr('id');
                $posts.children().hide();
                $posts.find('#post-' + id).fadeIn();
            });

            $posts.children('.post').hide();
            $intro.fadeIn(1000);
        }
    }

    initPosts();
    });
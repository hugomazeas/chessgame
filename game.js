$(document).ready(function () {
    let game = new GameBoard();
    game.init();
    game.display_board();
    game.init_pieces();
    game.update_board();
    $(".square").click(function () {
            
        if ($(this).hasClass("square_possible_move")) {
            let id = $(this).attr('id');
            let x = id[1];
            let y = id[0];
            let id_selected = $(".square_selected").attr('id');
            let x_selected = id_selected[1];
            let y_selected = id_selected[0];
            let piece = game.get_piece(x_selected, y_selected);
            let square = $("#" + y.toString() + x.toString());
            square.html(piece.get_html());
            $("#" + y_selected.toString() + x_selected.toString()).empty();
            game.update_board();
            $(".square").removeClass("square_selected");
            $(".square").removeClass("square_possible_move");
            $(".square").removeClass("square_possible_kill");
        } else if ($(this).hasClass("square_possible_kill")) {

            $(".square").removeClass("square_selected");
            $(".square").removeClass("square_possible_move");
            $(".square").removeClass("square_possible_kill");
        } else {
            let id = $(this).attr('id');
            let x = id[1];
            let y = id[0];
            let piece = game.get_piece(x, y);
            let coords = piece.get_coords_possible_moves();
            $(this).addClass("square_selected");
            coords.forEach(element => {
                let square = $("#" + element.y.toString() + element.x.toString());
                if (square.find("img").length === 0) {
                    square.addClass("square_possible_move");
                } else if (square.find("img").attr("id").split("-")[0] != piece.color) {
                    square.addClass("square_possible_kill");
                }
            });
        }
    });
});
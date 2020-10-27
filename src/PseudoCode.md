# Puzzle Slider


## data structure
data structure = [0,1,2,3,
                  4,5,6,7,
                  8,9,10,11,
                  12,13,14,15]

                 ? data[0 - 14] = { id: (0 - 14), click: (true - false) } ?
                 ? data[15] = { id: 15, click: false } ?

15 = empty space

normally can solve puzzle sliders by solving top row then, first column, then second row, then second column, etc...

## Tile
    tile is a div with the id that is made by mapping through the data structure

## Move Tile
    if click is true then move item into a temp and swap the places of the blank and the item


## click handler
    checks if move is legal move by checking index at -1, -4, 1, 4 around blank tile
    if it is around tile set clickable to true else set to false

    catch edge cases of 3,7,11 by catching them and removing the possibility of the +1 spot and 4,8,12 by catching them and removing the possibility of the -1 



## win state loop
    function win () {
        loop i for data{
            if i = data[i]
        }
        return win
    }             

## Scramble
    !!!GOD HELP ME!!!

    get random of the true clickables then send it to moveTile
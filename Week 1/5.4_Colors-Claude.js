function colorShade(color) {
    switch (color.toUpperCase()) {
        case "YELLOW":
        case "ORANGE":
        case "PINK":
            return "Light Color";
        case "BLUE":
        case "PURPLE":
        case "BROWN":
            return "Dark Color";
        default:
            return "Unknown Color";
    }
}
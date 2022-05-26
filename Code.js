javascript: function make_message(message) {
  var html;
  if (message.type == "MESSAGE" || message.type == "TIPS" || is_album_message_type(message.type)) {

    if (!is_album_message_type(message.type)) {
      message.text = message.text.replace(new RegExp("<(\\d+)>",'g'),"<img border=0 width=30px src='https://github.com/Dayset/Improved-chat-message-generation/raw/main/smileys/$1.gif'>"); 
    }
    
    if (!is_album_message_type(message.type)) {
      message.text = message.text.replace(new RegExp("<(\\d+)>",'g'),"<img border=0 src=\/img\/smiles\/smile$1.gif>"); 
    }

        var nick_style = "color:#" + message.color + "; font-weight:bold;";
        var message_style = "color:#" + message.color + ";";
        var message_time = message.time.substr(11, 8);

    if (message.is_private == 0) {

        html = "<span class='" + (message.user_sex == 'f' ? "time_girl" : "time_boy") + "'>(" + message_time  + ")</span>";
    if (message.user_id > 0) {
        html += make_dropdown_menu_to_user(message, false);
        html += "<a style='" + nick_style + ";text-decoration:underline;' href='javascript:writeName(\"" + message.user_nick.replace(/&quot;/g,'\\\"') + "\")'>" + message.user_nick + "</a>";
      }
        html += "<span style='" + message_style + "'>: " + make_message_text(message) + "</span>";

    } else {

        var message_month = message.time.substr(5, 2);
        var message_day   = message.time.substr(8, 2);
        html = "<span class='" + (message.user_sex == 'f' ? "time_girl" : "time_boy") + "'>(" + message_day + '.' + message_month  + ', ' + message_time + ")</span>";
    if (message.user_id > 0) {
        html += make_dropdown_menu_to_user(message, true);
        var user_nick_escape = escapeQuot(escape_user_nick(message.user_nick));
        html += "<a style='" + nick_style + ";text-decoration:underline;' href='javascript:header_send_private(" + message.user_id + ", \"" + user_nick_escape + "\")'>" + message.user_nick + "</a>";
        
        function beep() {
        var snd = new  Audio("https://github.com/Dayset/Improved-chat-message-generation/blob/main/pm_sound.mp3?raw=true");  
        snd.play();
        }
        beep();
    }
        html += "<span style='" + nick_style + "'>&rarr;" + message.to_user_nick + "</span>";
        html += "<span style='" + message_style + "'>: " + make_message_text(message) + "</span>";
    }
  }
  if (message.type == "READY") {
    html = message.text;
  }

  return html;
}

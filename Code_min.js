function make_message(e){var s,t,r,a,i,_;return"MESSAGE"!=e.type&&"TIPS"!=e.type&&!is_album_message_type(e.type)||(is_album_message_type(e.type)||(e.text=e.text.replace(new RegExp("<([1-9]|[1-2][0-9]|3[0-5])>","g"),"<img border=0 width=30px src='https://github.com/Dayset/Improved-chat-message-generation/raw/main/smileys/$1.gif'>")),is_album_message_type(e.type)||(e.text=e.text.replace(new RegExp("<(\\d+)>","g"),"<img border=0 src=/img/smiles/smile$1.gif>")),t="color:#"+e.color+"; font-weight:bold;",r="color:#"+e.color+";",_=e.time.substr(11,8),0==e.is_private?(s="<span class='"+("f"==e.user_sex?"time_girl":"time_boy")+"'>("+_+")</span>",0<e.user_id&&(s+=make_dropdown_menu_to_user(e,!1),s+="<a style='"+t+";text-decoration:underline;' href='javascript:writeName(\""+e.user_nick.replace(/&quot;/g,'\\"')+"\")'>"+e.user_nick+"</a>")):(a=e.time.substr(5,2),i=e.time.substr(8,2),s="<span class='"+("f"==e.user_sex?"time_girl":"time_boy")+"'>("+i+"."+a+", "+_+")</span>",0<e.user_id&&(s+=make_dropdown_menu_to_user(e,!0),_=escapeQuot(escape_user_nick(e.user_nick)),s+="<a style='"+t+";text-decoration:underline;' href='javascript:header_send_private("+e.user_id+', "'+_+"\")'>"+e.user_nick+"</a>",new Audio("http://shorturl.at/dwPSY").play()),s+="<span style='"+t+"'>&rarr;"+e.to_user_nick+"</span>"),s+="<span style='"+r+"'>: "+make_message_text(e)+"</span>"),"READY"==e.type&&(s=e.text),s}

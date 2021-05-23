var color_author="white";//Màu chữ tác giả

var color_text="white";//Màu chữ danh ngôn

var size_author="2";//Kích thước chữ tác giả

var size_text="4";//Kích trước chữ danh ngôn

var texts = {

" (H.F.Amiel)":"Học... Học để là chính mình, và học để từ bỏ với vẽ thanh cao những gì không phải là mình.",

" (Ngạn ngữ Đức)":"Tuần lễ của người chăm chỉ có bảy ngày, còn tuần lễ của kẻ lười biến có bảy ngày mai.",

" (Xuân Hoài)":"Về quê gặp bến sông quê, thời gian đã vắt qua đê lối mòn, dẫu cho biết mẹ không còn, bến xưa nhòe lệ mắt con vẫn tìm.",

" (Lễ Ký)":"Ngọc không giũa không thành đồ đẹp, người không học không biết lẽ phải.",

" (Ngạn ngữ Nga)":"Rễ của sự học tập thì đắng, quả của sự học tập thì ngọt.",

" (Khổng Tử)":"Người sáng suốt mà chăm học thì không lấy việc hỏi kẻ kém hơn mình là xấu hổ.",

" (Khổng Tử)":"Người học cao hiểu rộng mà không mang tri thức giúp ích cho đời thì cũng giống như người nông dân, đã cày xới mà không gieo hạt.",

" (Marius Grout)":"Người có học không phải người biết nhiều mà là biết rõ những gì mình phải biết và hiễu rõ những gì mình đã biết.",

" (Thái Công)":"Muốn đánh giá người trước tiên tự đánh giá mình, nói lời tổn hại người khác ngược lại tổn hại mình. Ngậm máu phun người dơ miệng mình.",

" (Ngoạn ngữ Mông Cổ)":"Không phải những người cười với ta đều là bạn ta, cũng không phải tất cả những người làm ta bực mình đều là kẻ thù của ta.",

" (Phan Nhân)":"Hạnh phúc có khi đơn giản chỉ là một ly cà phê buổi sáng và một ly sữa ấm vào buổi tối. Có khi chỉ là một bữa cơm đông đủ gia đình vào ngày chủ nhật. Có khi đơn giản là một cái ôm của mẹ trước khi rời khỏi nhà… Hạnh phúc chính là những điều rất giản đơn, đâu phải tìm kiếm xa xôi đâu.",

" (Phan Nhân)":" Ai cũng bảo con gái không nên quá mạnh mẽ, quá độc lập, quá lợi hại, nếu không sẽ chẳng mấy người thích. Thế nhưng, nếu tôi không kiên cường, không độc lập, không lợi hại, lúc tôi bất lực nhất ai sẽ vươn tay cứu giúp tôi?",

" (Phan Nhân)":"Người đàn ông đích thực luôn biết cách để chuộc lỗi của mình, không đơn thuần chỉ là nói xin lỗi.",

" (Phan Nhân)":"Viên mãn nhất trong tình cảm không phải là nắm giữ được bàn tay của một người nhất nhất không rời, mà là khi trải qua bao nhiêu mất mát đổi thay, họ vẫn về để nắm lấy tay bạn.",

" (Phạm Lữ Ân)":"Bạn có thể yêu hay ghét, thích hay không còn thích nữa. Chỉ cần thành thật, bạn sẽ luôn luôn thanh thản.",

" (Julia Roberts)":"Bạn sẽ biết rằng đó là tình yêu khi tất cả những gì bạn muốn là người đó hạnh phúc cho dù niềm hạnh phúc đó không có phần của bạn.",

" (Phan Nhân)":" Để trưởng thành bạn cần phải đánh đổi bằng nhiều mối quan hệ và đánh mất rất nhiều người gọi là bạn.",

" (Phan Nhân)":"Bạn có thể khiến một cô gái khóc, cũng có thể làm cô ấy tủi thân, nhưng không được khiến cô ấy trầm mặc im lặng. Bởi vì trầm mặc chính là mức độ tổn thương cao nhất, lặng im chính là tiếng khóc đau khổ nhất của một người con gái.",

" (Phan Nhân)":"Sẽ có lúc bạn buồn mà chẳng biết tại sao. Cảm giác giống như đã đánh rơi thứ gì đó rất quan trọng nhưng chẳng thể nhớ đó là gì.",

" (Phan Nhân)":"Chúng mình thức dậy mỗi ngày đều mong thấy được mình bên người mình yêu. Thiên đường của người này, đôi khi, chỉ là ánh mắt, bờ vai, tấm lưng, đôi bàn tay của người kia.",

" (Phan Nhân)":"Đúng thời điểm hay không đúng thời điểm không quan trọng. Đúng người hay sai người không quan trọng. Quan trọng là có thương hay không thương. Đã thương thì không đúng thời điểm hay kể cả sai người, cũng chẳng thành vấn đề.",

" (Phan Nhân)":"Đời người, thứ khó chấp nhận nhất chính là việc ta nhận ra rằng sau tất cả mọi cố gắng của bản thân vì một ai đó, một thứ gì đó, thì đến cuối cùng tất cả cũng rời bỏ ta.",

" (Bill Gates)":"Mọi người sẽ không bao giờ ngó ngàng đến lòng tự trọng của bạn, điều mà họ quan tâm chính là thành tựu mà bạn đạt được. Do đó, trước khi có được những thành tựu thì bạn đừng nên quá chú trọng hay cường điệu lòng tự trọng của bản thân mình lên.",

" (Martin Luther King)":"Bạn không thể điều khiển hướng gió, chỉ có thể điều khiển cánh buồm.Bạn không cần phải thấy hết các bậc thang mà chỉ cần đi bước đầu tiên với một niềm tin.",

" (Nguyễn Ngọc Thạch)":"Nghịch lý thường nằm ở chỗ, chúng ta cứ thường phán xét cuộc sống của người khác dựa trên quan điểm cá nhân, rồi lại loay hoay tìm cách sống sao cho hợp với đánh giá theo quan điểm của người khác.",

" (Phan Ý Yên)":"Có bao nhiêu người trên thế gian này, trái tim chung nhịp nhưng không thể cầm tay đi chung trên một con đường? Nhân duyên này sẽ khổ đau nhưng đó chính là thứ nhân duyên khiến bạn trở nên mạnh mẽ.",

" (Phan Ý Yên)":"Điều đáng sợ nhất mà một người phải đối diện không phải là thất bại hay mất mát. Mà chính là lúc tỉnh giấc mỗi buổi sáng, không mong muốn gì, không khát khao gì. Bởi vì trái tim rỗng toác. Bất mãn với cả chính bản thân mình. Khi ấy, có lẽ điều kỳ diệu là một từ ngữ quá xa xỉ và nực cười. Nhưng rồi, chúng ta cũng phải tự cứu chính mình thôi. Bạn luôn có sự lựa chọn, ngay cả khi cùng cực nhất. Là đứng lên và đi hay đứng lại rồi bị quên lãng. Quyền quyết định thuộc về bạn.",

" (Phan Nhân)":"Thành công không phải chìa khóa mở cửa hạnh phúc. Hạnh phúc là chìa khóa dẫn tới thành công. Nếu bạn yêu điều bạn đang làm, bạn sẽ thành công.",

" (Phan Nhân)":"Quá khứ của người yêu luôn là chủ đề muôn thuở của biết bao mối quan hệ. Chưa biết thì lại cố tìm hiểu để biết. Biết rồi thì trong lòng lại đau nhói không ngừng. Hóa ra rồi mới biết, khi bạn ghen với quá khứ còn đau khổ hơn là ghen ở hiện tại gấp trăm lần.",

" (Phan Nhân)":"Thiên hạ vẫn hay bảo rằng sống trên đời này, yêu và được yêu là một điều may mắn. Tôi thì chưa rõ cái may mắn đó sẽ ra sao, chỉ biết là cuộc đời này, trước khi gặp được cái thứ gọi là may mắn, là cả một khoảng thời gian dài chìm trong đau khổ, xót xa và tuyệt vọng, mà nếu nó kéo dài quá lâu, đôi khi con người ta còn chẳng màng đến chuyện may mắn hay không nữa là.",

" (Phan Ý Yên)":"Bạn sẽ biết rõ một người hơn rất nhiều dựa vào những gì anh ta thể hiện vào những ngày cuối cùng của một mối quan hệ chứ không phải bởi những gì anh ta đã làm vào buổi đầu tiên.",

" (Phan Nhân)":"Càng về lớn, tôi càng phải học cách đừng bao giờ đặt kì vọng và chờ đợi ở người khác quá nhiều. Cái gì cũng phải tự thân tự lực, vì người quan tâm mình chắc chắn đã không để mình chờ đợi lâu đến như vậy.",

" (Thái Trí Hằng)":"Tôi luôn cảm thấy thời gian như một chuyến xe lửa lao đi rất nhanh, nhưng tôi lại như hành khách ngủ trong xe, không hề hay biết. Tới khi tỉnh lại, đã bỏ qua rất nhiều thứ, thậm chí bỏ qua cả trạm dừng.",

" (Phan Nhân)":"Dường như càng lớn, người ta càng phải đối diện với nhiều sự lựa chọn hơn lúc nhỏ, không chỉ đơn thuần là thích thì có thể chọn. Mọi thứ trở nên rắc rối hơn, và luôn luôn có sự do dự song song tồn tại. Cuối cùng, dù là lựa chọn con đường nào đi nữa, chúng ta sẽ vẫn chịu tổn thương.",

" (Phan Nhân)":"Không phải vì em sợ đơn độc, không phải vì em sợ không có anh em sẽ không sống được. Mà vì những khoảnh khắc nhìn thấy anh trong thế giới của mình khiến em tin rằng : Đôi khi không được thương một người còn tệ hơn cả cái chết, tệ hơn cả việc khóc hàng đêm dài đằng đẵng.",

" (Marc Levy)":"Ra đi không phải bao giờ cũng đồng nghĩa với một sự từ bỏ, đó cũng có thể là một cách để giữ gìn những gì đã trải qua, nếu người ta biết ra đi trước khi quá trễ.",

" (Phan Nhân)":"Thời gian làm cho người ta tha hóa bớt dần sự bao dung, độ lượng và ích kỉ cứ đầy dần trong túi áo. Kể cả tôi trong những ngày này, ngoài gia đình ra chẳng còn sợ mất điều gì cả.",

" (Bussy Rebutin)":"Tình yêu trong xa cách ví như ngọn lửa trong gió. Gió thổi tắt ngọn lửa nhỏ và thổi bùng ngọn lửa lớn.",

" (Voltaire)":"Sự làm việc giúp ta thoát khỏi ba cái ác là buồn chán, tật xấu và túng thiếu.",

" (Phan Văn Nhân)":"Những ai không biết tự trọng thì cũng khó mà đòi hỏi người khác tôn trọng mình.",

" (Phan Văn Nhân)":"Đời sẽ dịu dàng biết mấy khi tất cả con người biết đặt mình vào vị trí người khác.",

" (Chương Đặng)":" Điều tuyệt nhất khi còn thơ là chúng ta không hề biết mình đang sống những ngày hạnh phúc. Đến khi nhớ lại, ta không khỏi tiếc nuối ngày ta thức dậy và rắp tâm trở thành đàn ông, đàn bà…thay vì cứ là một đứa trẻ!",

" (Lời Phật)":"Nhân nghĩa chớ dính tiền, dính tiền nhân nghĩa tuyệt. Đường xa mới biết sức ngựa, sống lâu mới rõ lòng người.",

" (Bohr)":"Mặt trời nhìn đẹp nhất khi mọc ở phía đông và lặng ở phía tây, tính nết con người nhìn rõ nhất khi còn bé và giờ phút hấp hối.",

" (Ngoạn ngữ Mông Cổ)":"Không phải tất cả những người cười với ta đều là bạn, cũng không phải tất cả những người làm ta bực mình đều là kẻ thù.",

" (Block)":"Thiện là bị động, nó phục tùng lý trí, ác là chủ động, nó sinh ra hành động. Thiện là thiên đường, ác là địa ngục.",

" (Tiêu Hà)":"Thuốc hay thì đắng miện nhưng có lợi cho người bệnh, lời hay thì trái tai người nhưng có lợi cho công việc",

" (Tagore)":"Hãy đễ cho người chết đi tìm sự bất tử trong danh vọng và những người sống đi tìm sự bất tử trong tình yêu",

};

function count_array(texts){

var lenght=0;

for(author in texts)

{

lenght++;

}

return lenght;

}

var lenght=count_array(texts); //so phan tu mang

var randno =Math.floor(Math.random()*lenght);

var dem = 0;

for (author in texts)

{

if(randno==dem){

document.write('<left><font color="'+color_text+'" size="'+size_text+'">'+texts[author]+

'</font><font color="'+color_author+'" size='+size_author+'>'+author+'</font></left>');

}

dem++;

}
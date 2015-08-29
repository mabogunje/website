// Javascript Library for Mabogunje.net
// Dependencies: jquery, juicebox

const PROFILES = ['WRITER', 'SHARER', 'CODER'];
var DATA = {};
DATA[PROFILES[0]] = [
  {
    label: "Poetry",
	  value: 70,
    color:"#96b5b4",
    highlight: "#abc4c3",
  },
  { 
		label: "Prose",
		value: 25,
		color: "#d08770",
		highlight: "#d99f8d",
	},
  { 
		label: "Drama",
		value: 5,
		color: "#a3be8c",
		highlight: "#b5cba3",
	},
];

DATA[PROFILES[1]] = {
  labels: ['Reading', 'Writing', 'Programming', 'Digital Art', 'Web Surfing', 'Watching Anime'],
  datasets: [
    {
      label: "Sharer Hobby Chart",
      fillColor: "rgba(240,248,255,0.2)",
      strokeColor: "#f06666",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#f06666",
      pointHighlightFill: "#f06666",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: [20, 20, 20, 10, 20, 10],
    }
  ]
};

DATA[PROFILES[2]] = {
  labels: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'Scala', 'C#', '.Net', 'Java', 'Python'],
  datasets: [
    {
      label: "Coder Skill Chart",
      fillColor: "rgba(240,248,255,0.2)",
      strokeColor: "#4169e1",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#4169e1",
      pointHighlightFill: "#4169e1",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: [100, 100, 100, 80, 70, 60, 50, 80, 100],
    }
  ]
};

function setProfile(profile) {
  pushButtonFor(profile);
  updateButtonLabelsFor(profile);
  displayProfile(profile);
  initChartFor(profile);
}

function pushButtonFor(profile) {
  switch(profile) {
    case PROFILES[0]:
      $('#button-writer').addClass('button writer selected');
      $('#button-coder').removeClass('selected').addClass('button coder');
      $('#button-sharer').removeClass('selected').addClass('button sharer');
      break;
    case PROFILES[1]:
      $('#button-sharer').addClass('button sharer selected');
      $('#button-coder').removeClass('selected').addClass('button coder');
      $('#button-writer').removeClass('selected').addClass('button writer');
      break;
    case PROFILES[2]:
    default:
      $('#button-coder').addClass('button coder selected');
      $('#button-writer').removeClass('selected').addClass('button writer');
      $('#button-sharer').removeClass('selected').addClass('button sharer');
      break;
  }
}

function updateButtonLabelsFor(profile) {
  var seeLabel = 'See Below';
  var moreLabel = 'Click to Learn More';

  switch(profile) {
    case PROFILES[0]:
      $('#button-writer .read-more').html(seeLabel);
      $('#button-coder .read-more').html(moreLabel);
      $('#button-sharer .read-more').html(moreLabel);
      break;
    case PROFILES[1]:
      $('#button-sharer .read-more').html(seeLabel);
      $('#button-coder .read-more').html(moreLabel);
      $('#button-writer .read-more').html(moreLabel);
      break;
    case PROFILES[2]:
    default:
      $('#button-coder .read-more').html(seeLabel);
      $('#button-sharer .read-more').html(moreLabel);
      $('#button-writer .read-more').html(moreLabel);
      break;
  }
}
function initChartFor(profile) {
  var context, chart;

  switch(profile) {
    case PROFILES[0]:
      context =  $("#writerSkillChart").get(0).getContext("2d");
	    chart = new Chart(context).Pie(DATA[PROFILES[0]], {responsive : true});
      break;
    case PROFILES[1]:
      context =  $("#sharerSkillChart").get(0).getContext("2d");
	    chart = new Chart(context).Radar(DATA[PROFILES[1]], {responsive : true});
      break;
    case PROFILES[2]:
    default:
      context = $("#coderSkillChart").get(0).getContext("2d");
      chart = new Chart(context).Radar(DATA[PROFILES[2]], {responsive : true});
      break;
  }
}

function displayProfile(profile) {
  switch(profile) {
    case PROFILES[0]:
      $('body').css('background-color','#e6d2a4');
      $('article.writer').removeClass('hidden');
      $('article.coder').addClass('hidden');
      $('article.sharer').addClass('hidden');
      break;
    case PROFILES[1]:
      $('body').css('background-color','#f0a1a1');
      $('article.sharer').removeClass('hidden');
      $('article.coder').addClass('hidden');
      $('article.writer').addClass('hidden');
      break;
    case PROFILES[2]:
    default:
      $('body').css('background-color','#acbae1');
      $('article.coder').removeClass('hidden');
      $('article.writer').addClass('hidden');
      $('article.sharer').addClass('hidden');
      break;
  }
}

function initPortfolios() {
	 new juicebox({ // Coder Portfolio
     baseUrl: 'portfolio/coder',
	 	 containerId: 'coder-portfolio',
     backgroundColor: '#acbae1',
     useThumbDots: true,
     galleryTitle: 'Web Portfolio',
     galleryWidth: '380px',
     galleryHeight: '310px',
	 });

	 new juicebox({ // Writer Portfolio
     baseUrl: 'portfolio/writer',
	 	 containerId: 'writer-portfolio',
     backgroundColor: '#e6d2a4',
     useThumbDots: true,
     galleryTitle: 'Writing Portfolio',
     galleryWidth: '380px',
     galleryHeight: '310px',
	 });

	 new juicebox({ // Sharer Portfolio
     baseUrl: 'portfolio/sharer',
	 	 containerId: 'sharer-portfolio',
     backgroundColor: '#f0a1a1',
     useThumbDots: true,
     galleryTitle: 'General Portfolio',
     galleryWidth: '380px',
     galleryHeight: '310px',
	 });
}


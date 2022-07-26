export class App {
  
  start = () => {
    window.onpopstate = (e) => {
      this.navigateToRoute(e.state?.route || '');
    }
    
    window.onload = (e) => {
      if(!history.state){
        const route = location.pathname;
        
        this.pushToHistory(route);
        this.navigateToRoute(route);
      } else {
        this.navigateToRoute(history.state?.route || '');
      }
    }
  }
  
  pushToHistory = (route) => {
    history.pushState({route}, null, route);
  }
  
  navigateToRoute = (route) => {
    for(const link of document.querySelectorAll("[href]")){
      link.onclick = (e) => {
        e.preventDefault();
        
        const route = e.target.pathname;
        
        this.pushToHistory(route);
        this.navigateToRoute(route);
      }
    }
  }
  
}
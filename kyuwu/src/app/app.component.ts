import {
  Component,
  OnInit
} from '@angular/core';
import {
  ClickMode,
  HoverMode,
  MoveDirection,
  OutMode,
  Container,
  Engine,
  ISourceOptions
} from 'tsparticles-engine';
import {
  loadFull
} from "tsparticles";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kyuwu';
  id = "tsparticles";
  particlesUrl = "https://raw.githubusercontent.com/Kyuwu/personal-site2.0/main/kyuwu/src/assets/particle.json";

  /* or the classic JavaScript object */
  // particlesOptions = Config

  options = {
    fpsLimit: 120,
    particles: {
      color: {
        value: "#943c74"
      },
      links: {
        enable: true,
        color: "#ce8ba0"
      },
      move: {
        enable: true,
        speed: 1
      }
    }
  };
  particlesLoaded(container: Container): void {
    // console.log(container);
  }

  async particlesInit(engine: Engine): Promise < void > {
    // console.log(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }
}

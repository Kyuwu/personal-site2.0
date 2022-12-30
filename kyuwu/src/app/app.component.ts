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
import { Config } from 'src/assets/particle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kyuwu';
  id = "tsparticles";
  particlesUrl = "https://raw.githubusercontent.com/Kyuwu/personal-website/main/parts.json";

  /* or the classic JavaScript object */
  particlesOptions = Config


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

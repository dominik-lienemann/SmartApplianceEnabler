import {Selector} from 'testcafe';
import {saeRestartTimeout} from '../shared/timeout';
import {TopMenu} from './top-menu.page';

export class SideMenu {

  private static async openSideMenuIfClosed(t: TestController) {
    const sideMenuOpen = await SideMenu.newAppliance().visible;
    if (! sideMenuOpen) {
      await TopMenu.clickAppliances(t);
    }
  }

  public static newAppliance(): Selector {
    return Selector('a[href="/appliance"]');
  }

  public static async clickNewAppliance(t: TestController) {
    await SideMenu.openSideMenuIfClosed(t);
    await t.click(SideMenu.newAppliance());
  }

  public static appliance(id: string): Selector {
    return Selector(`a[href="/appliance/${id}"]`, {timeout: saeRestartTimeout});
  }

  public static async clickAppliance(t: TestController, id: string) {
    await SideMenu.openSideMenuIfClosed(t);
    await t.click(SideMenu.appliance(id));
    await Selector('app-appliance', {timeout: saeRestartTimeout}).exists;
  }

  public static meter(id: string): Selector {
    return Selector(`a[href="/meter/${id}"]`, {timeout: saeRestartTimeout});
  }

  public static async clickMeter(t: TestController, id: string) {
    await SideMenu.openSideMenuIfClosed(t);
    await t.click(SideMenu.meter(id));
    await Selector('app-meter', {timeout: saeRestartTimeout}).exists;
  }

  public static control(id: string): Selector {
    return Selector(`a[href="/control/${id}"]`, {timeout: saeRestartTimeout});
  }

  public static async clickControl(t: TestController, id: string) {
    await SideMenu.openSideMenuIfClosed(t);
    await t.click(SideMenu.control(id));
    await Selector('app-control', {timeout: saeRestartTimeout}).exists;
  }
}

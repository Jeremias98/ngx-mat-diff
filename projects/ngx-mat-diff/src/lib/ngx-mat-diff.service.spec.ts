import { TestBed } from '@angular/core/testing';

import { NgxMatDiffService } from './ngx-mat-diff.service';
import { State } from './clases/state/state';
import { Keep } from './clases/state/keep';
import { Insert } from './clases/state/insert';
import { Remove } from './clases/state/remove';

describe('NgxMatDiffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('Deberia Crearse', () => {
    const service: NgxMatDiffService = TestBed.get(NgxMatDiffService);
    expect(service).toBeTruthy();
  });

  it('Initially left and right text should be undefined', () => {
    const service: NgxMatDiffService = TestBed.get(NgxMatDiffService);
    expect(service.getLeftText()).toBe(undefined);
    expect(service.getRightText()).toBe(undefined);
  });

  it('Left and right text max shoud be initially zero', () => {
    const service: NgxMatDiffService = TestBed.get(NgxMatDiffService);

    expect(service.getLeftLength()).toBe(0);
    expect(service.getRightLength()).toBe(0);
  });

  it('Set left and right text should change their values', () => {
    const service: NgxMatDiffService = TestBed.get(NgxMatDiffService);

    let textoPrueba: string = "Texto de prueba";

    service.setLeftText(textoPrueba);
    service.setRightText(textoPrueba);

    expect(service.getLeftText()).toBe(textoPrueba);
    expect(service.getRightText()).toBe(textoPrueba);
  });

  it('Left and right text shoud be splitted by a blank space', () => {
    const service: NgxMatDiffService = TestBed.get(NgxMatDiffService);

    let texto: string = "Esto es un texto de prueba";
    let textoSpliteado: string[] = ["Esto", "es", "un", "texto", "de", "prueba"];

    service.setLeftText(texto);
    service.setRightText(texto);

    expect(service.getSplittedLeftText()).toEqual(textoSpliteado);
    expect(service.getSplittedRightText()).toEqual(textoSpliteado);
  });

  it('Left and right text max shoud be the splitted length', () => {
    const service: NgxMatDiffService = TestBed.get(NgxMatDiffService);

    let textoLeft: string = "Esto es un texto de prueba";
    let textoRight: string = "Esto es otro texto de prueba para la derecha";

    let largoLeft: number = 6;
    let largoRight: number = 9;

    service.setLeftText(textoLeft);
    service.setRightText(textoRight);

    expect(service.getLeftLength()).toBe(largoLeft);
    expect(service.getRightLength()).toBe(largoRight);
  });

  it('Diff of two empty strings should return an empty array', () => {
    const service: NgxMatDiffService = TestBed.get(NgxMatDiffService);

    let textoLeft: string = "";
    let textoRight: string = "";

    service.setLeftText(textoLeft);
    service.setRightText(textoRight);

    expect(service.diff().length).toBe(0);
  });

  it('Diff of left empty string and right some string should return only Insert states', () => {
    const service: NgxMatDiffService = TestBed.get(NgxMatDiffService);

    let textoLeft: string = "";
    let textoRight: string = "Esto es un texto de prueba";

    service.setLeftText(textoLeft);
    service.setRightText(textoRight);

    for (let state of service.diff()) {
      expect(state instanceof Insert).toBeTruthy();
    }
  });

  it('Diff of right empty string and left some string should return only Remove states', () => {
    const service: NgxMatDiffService = TestBed.get(NgxMatDiffService);

    let textoLeft: string = "Esto es un texto de prueba";
    let textoRight: string = "";

    service.setLeftText(textoLeft);
    service.setRightText(textoRight);

    for (let state of service.diff()) {
      expect(state instanceof Remove).toBeTruthy();
    }
  });

  it('Diff of two identical strings should return only Keep states', () => {
    const service: NgxMatDiffService = TestBed.get(NgxMatDiffService);

    let textoLeft: string = "Esto es un texto de prueba";
    let textoRight: string = "Esto es un texto de prueba";

    service.setLeftText(textoLeft);
    service.setRightText(textoRight);

    for (let state of service.diff()) {
      expect(state instanceof Keep).toBeTruthy();
    }
  });

  it('Keep state should have the line passed', () => {
    let state: Keep = new Keep("Line");
    expect(state.getLine()).toBe("Line");
  });

  it('Insert state should have the line passed', () => {
    let state: Insert = new Keep("Line");
    expect(state.getLine()).toBe("Line");
  });

  it('Remove state should have the line passed', () => {
    let state: Remove = new Keep("Line");
    expect(state.getLine()).toBe("Line");
  });

  it('Insert state should have \'+\' symbol', () => {
    let state: Insert = new Insert("Line");
    expect(state.symbol()).toBe("+");
  });

  it('Remove state should have \'-\' symbol', () => {
    let state: Remove = new Remove("Line");
    expect(state.symbol()).toBe("-");
  });

  it('Keep state should have \'=\' symbol', () => {
    let state: Keep = new Keep("Line");
    expect(state.symbol()).toBe("=");
  });

  it('Insert state should have \'+\' symbol', () => {
    let state: Insert = new Insert("Line");
    expect(state.symbol()).toBe("+");
  });

  it('Remove state should have \'-\' symbol', () => {
    let state: Remove = new Remove("Line");
    expect(state.symbol()).toBe("-");
  });

  it('Keep state should have \'black\' color', () => {
    let state: Keep = new Keep("Line");
    expect(state.color()).toBe("black");
  });

  it('Insert state should have \'green\' color', () => {
    let state: Insert = new Insert("Line");
    expect(state.color()).toBe("green");
  });

  it('Remove state should have \'red\' color', () => {
    let state: Remove = new Remove("Line");
    expect(state.color()).toBe("red");
  });

});

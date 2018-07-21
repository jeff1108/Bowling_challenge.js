'use strict';

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('.add', function() {
    it('adds roll score', function() {
      expect(frame.add(3)).toEqual([3]);
    });
  });

  describe('.score', function() {
    it('calculates the frame score', function() {
      frame.add(3);
      frame.add(3);
      expect(frame.score()).toEqual(6);
    });
  });

  describe('.isSpare', function() {
    it('returns true when it is spare', function() {
      frame.add(3);
      frame.add(7);
      expect(frame.isSpare()).toBeTruthy();
    });
  });

  describe('.isStore', function() {
    it('return true when it is strike', function() {
      frame.add(10);
      expect(frame.isStrike()).toBeTruthy();
    });
  });
});

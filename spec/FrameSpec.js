'use strict';

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('.add', function() {
    it('add roll score', function() {
      expect(frame.add(3)).toEqual([3]);
    });
  });

  describe('.score', function() {
    it('calculate the frame score', function() {
      frame.add(3)
      frame.add(3)
      expect(frame.score()).toEqual(6);
    });
  });
});

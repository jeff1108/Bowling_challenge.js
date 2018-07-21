'use strict';

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('.add', function() {
    it('add each score', function() {
      expect(frame.add(3)).toEqual([3]);
    });
  });
});

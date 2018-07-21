'user strict'


describe('Feature Test', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('show 2 rolls scores of frame', function() {
    it('User can store 2 rolls scores of frame ', function() {
      frame.add(3);
      expect(frame.add(3)).toEqual([3,3]);
    });
  });

  describe('show frame score', function() {
    it('User can see the frame score', function() {
      frame.add(3)
      frame.add(3)
      expect(frame.score()).toEqual(6);
    });
  });
});

'user strict'


describe('Feature Test', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('show each score of frame 1', function() {
    it('User can store each score of frame 1', function() {
      frame.add(3);
      expect(frame.add(3)).toEqual([3,3]);
    });
  });
})

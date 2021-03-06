function BowlsTracker() {
  this.bowlsLeft = 21;
  this.bowlsRecord = [];
};

BowlsTracker.prototype._recordRoll = function (pinsKnockedDown, pinsObject, scoreBowlObject) {
  this.bowlsRecord.push(pinsKnockedDown);
  scoreBowlObject.evaluateScore(pinsObject, this);
    scorecardEntry(pinsKnockedDown, pinsObject, this);
  _evaluateBowl(pinsObject, this);
  this._reduceAvailableBowls();
};

BowlsTracker.prototype._reduceAvailableBowls = function () {
  this.bowlsLeft--;
};

BowlsTracker.prototype._currentPinsKnockedOver = function () {
  return this.bowlsRecord[(this._currentBowl())];
};

BowlsTracker.prototype._previousPinsKnockedOver = function () {
  return this.bowlsRecord[(this._previousBowl())];
};

BowlsTracker.prototype._framePinsKnockedOver = function () {
  return this.bowlsRecord[(this._currentBowl())] + this.bowlsRecord[(this._previousBowl())];
};

BowlsTracker.prototype._currentBowl = function () {
  return this.bowlsRecord.length -1;
};

BowlsTracker.prototype._previousBowl = function () {
  return this.bowlsRecord.length -2;
};

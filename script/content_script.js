$(document).ready(function () {
  var synth = new Tone.MonoSynth();
  synth.toMaster();
  $(document).click(function (e) {
    var w = $(e.target).width();
    var note = synth.frequencyToNote(w);
    console.log(note);
    synth.triggerAttack(note);
  });

  $(document).mouseup(function () {
    setTimeout(function () {
      synth.triggerRelease();
    }, 500);
  });
});
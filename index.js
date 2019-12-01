// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');
const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
    let speakOutput = 'Bienvenido a la skill de Contaminación del aire. En San Nicolas actualmente la calidad del aire es mala ya que tiene 172 puntos. \n';
    
        const frases = [
        "Si desea buscar otra ciudad sobre la calidad de aire puedes decir, alexa: dame la calidad de aire de Guadalupe",
        "Si desea buscar otra ciudad sobre la calidad de aire puedes decir, alexa: dame la calidad de aire de Monterrey",
        "Si desea buscar otra ciudad sobre la calidad de aire puedes decir, alexa: dame la calidad de aire de San Pedro"
        ];
        
        const aleatorio = Math.floor(Math.random()*4);
        const frase = frases[aleatorio];
        
        speakOutput = speakOutput + frase;
    
        const speakReprompt = ' '
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakReprompt)
            .getResponse();
    }
};

const RandomHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Random';
    },
    handle(handlerInput) {
       let speakOutput = 'Bienvenido a la skill de Contaminación del aire. En San Nicolas actualmente la calidad del aire es mala ya que tiene 172 puntos. \n';
    
        const frases = [
        "Si desea buscar otra ciudad sobre la calidad de aire puedes decir, alexa: dame la calidad de aire de Guadalupe",
        "Si desea buscar otra ciudad sobre la calidad de aire puedes decir, alexa: dame la calidad de aire de Monterrey",
        "Si desea buscar otra ciudad sobre la calidad de aire puedes decir, alexa: dame la calidad de aire de San Pedro"
        ];
        
        const aleatorio = Math.floor(Math.random()*4);
        const frase = frases[aleatorio];
        
        speakOutput = speakOutput + frase;
    
        const speakReprompt = ' '
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakReprompt)
            .getResponse();
    }
};

const MonterreyHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Monterrey';
    },
    handle(handlerInput) {
        const speakOutput = 'En Monterrey actualmente la calidad del aire es mala ya que tiene 182 puntos. \n';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt("Si desea buscar otra ciudad sobre la calidad de aire puedes decir, alexa: dame la calidad de aire de Escobedo")
            .getResponse();
    }
};

const EscobedoHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Escobedo';
    },
    handle(handlerInput) {
        const speakOutput = 'En Escobedo actualmente la calidad del aire es regular ya que tiene 78 puntos. \n';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('Si desea buscar otra ciudad sobre la calidad de aire puedes decir, alexa: dame la calidad de aire de Apodaca')
            .getResponse();
    }
};

const GuadalupeHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Guadalupe';
    },
    handle(handlerInput) {
        const speakOutput = 'En Guadalupe actualmente la calidad del aire es regular ya que tiene 70 puntos. \n';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('Si desea buscar otra ciudad sobre la calidad de aire puedes decir, alexa: dame la calidad de aire de Escobedo')
            .getResponse();
    }
};

const SanPedroHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SanPedro';
    },
    handle(handlerInput) {
        const speakOutput = 'En SanPedro actualmente la calidad del aire es estable ya que tiene 55 puntos. \n';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('Si desea buscar otra ciudad sobre la calidad de aire puedes decir, alexa: dame la calidad de aire de Apodaca')
            .getResponse();
    }
};

/*const GuadalupeHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === '';
    },
    handle(handlerInput) {
        const speakOutput = 'Si desea buscar otra ciudad sobre la calidad de aire puedes decir, alexa: dame la calidad de aire de Guadalupe';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};*/

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.stack}`);
        const speakOutput = `Sorry, I had trouble doing what you asked. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        MonterreyHandler,
        SanPedroHandler,
        EscobedoHandler,
        GuadalupeHandler,
        RandomHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler, // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    )
    .addErrorHandlers(
        ErrorHandler,
    )
    .lambda();

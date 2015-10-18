(ns ^:figwheel-always figwheel-app.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [cljs.core.async :refer [<!]]
            [cljs-http.client :as http]
            [devtools.core :as devtools]
            [cognitect.transit :as t]))

(enable-console-print!)
(devtools/install!)

(println "Edits to this text should show up in your developer console.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (r/atom {:username nil
                            :is-authenticated false
                            :tasks nil}))

(defn login [username]
  (go (let [response (<! (http/get "http://ngcourse.herokuapp.com/api/v1/tasks" {:with-credentials? false}))
            r (t/reader :json)
            tasks (t/read r (:body response))]
        (swap! app-state #(merge % {:username username :is-authenticated true :tasks tasks})))))

(defn login-component []
  (let [username (r/atom "")
        password (r/atom "")]
    (fn []
      [:div
       [:h1 "ngCourse App"]
       [:label "Enter username"]
       [:input {:type "text" :value @username
                :on-change #(reset! username (-> % .-target .-value))}]
       [:label "Password"]
       [:input {:type "password" :value @password
                :on-change #(reset! password (-> % .-target .-value))}]
       [:button {:on-click #(login @username)} "Login"]])))

(defn task-component [task]
  [:p (get task "owner") " | " (get task "description")])

(defn task-list-component [username]
  (let []
    (fn []
      [:div
       [:div
        [:span "Hello, " username "!"]
        [:br]
        [:span "You've got " (count (:tasks @app-state)) " tasks"]
        [:button {:on-click #()} "Add task"]]
       [:div
        [:ul
         (for [task (:tasks @app-state)]
           [:li [task-component task]])]]]
      )))

(defn main []
  (if (:is-authenticated @app-state)
    [task-list-component (:username @app-state)]
    [login-component]))

(r/render [main] (.getElementById js/document "app"))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)


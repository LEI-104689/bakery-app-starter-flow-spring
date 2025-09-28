package com.vaadin.starter.bakery.backend.data;

/**
 * Representa estatísticas de entregas, agregando informações numéricas
 * usadas no painel de controle (dashboard).
 *
 * Inclui métricas relacionadas a pedidos entregues, vencidos ou novos.
 */
public class DeliveryStats {

    // Número de pedidos entregues no dia atual
    private int deliveredToday;

    // Número de pedidos com vencimento para o dia atual
    private int dueToday;

    // Número de pedidos com vencimento para o dia seguinte
    private int dueTomorrow;

    // Número de pedidos que não estão disponíveis para entrega hoje
    private int notAvailableToday;

    // Número de novos pedidos recebidos
    private int newOrders;

    /**
     * Retorna o número de pedidos entregues hoje.
     */
    public int getDeliveredToday() {
        return deliveredToday;
    }

    /**
     * Define o número de pedidos entregues hoje.
     */
    public void setDeliveredToday(int deliveredToday) {
        this.deliveredToday = deliveredToday;
    }

    /**
     * Retorna o número de pedidos com vencimento hoje.
     */
    public int getDueToday() {
        return dueToday;
    }

    /**
     * Define o número de pedidos com vencimento hoje.
     */
    public void setDueToday(int dueToday) {
        this.dueToday = dueToday;
    }

    /**
     * Retorna o número de pedidos com vencimento amanhã.
     */
    public int getDueTomorrow() {
        return dueTomorrow;
    }

    /**
     * Define o número de pedidos com vencimento amanhã.
     */
    public void setDueTomorrow(int dueTomorrow) {
        this.dueTomorrow = dueTomorrow;
    }

    /**
     * Retorna o número de pedidos indisponíveis para entrega hoje.
     */
    public int getNotAvailableToday() {
        return notAvailableToday;
    }

    /**
     * Define o número de pedidos indisponíveis para entrega hoje.
     */
    public void setNotAvailableToday(int notAvailableToday) {
        this.notAvailableToday = notAvailableToday;
    }

    /**
     * Retorna o número de novos pedidos recebidos.
     */
    public int getNewOrders() {
        return newOrders;
    }

    /**
     * Define o número de novos pedidos recebidos.
     */
    public void setNewOrders(int newOrders) {
        this.newOrders = newOrders;
    }
}